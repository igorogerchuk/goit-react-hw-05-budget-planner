import React from 'react';
import styled from 'styled-components';
import Value from './Value';

import { connect } from 'react-redux';
import * as selectors from '../redux/selectors';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

const mapStateToProps = state => {
  return {
    budget: selectors.getBudget(state),
    expenses: selectors.getTotalExpenses(state),
    balance: selectors.getBalance(state),
  };
};

export default connect(mapStateToProps)(Values);
