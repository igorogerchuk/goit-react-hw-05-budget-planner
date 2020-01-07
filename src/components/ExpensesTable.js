import React from 'react';
import styled from 'styled-components';

import Expense from './Expense';
import { connect } from 'react-redux';
import * as selectors from '../redux/selectors';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ expenses = [], onRemove }) => (
  <Table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {expenses.map(({ id }) => (
        <Expense key={id} id={id} />
      ))}
    </tbody>
  </Table>
);

const mapStateToProps = state => {
  return {
    expenses: selectors.getExpenses(state),
  };
};

export default connect(mapStateToProps)(ExpensesTable);
