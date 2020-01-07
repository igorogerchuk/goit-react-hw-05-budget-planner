import React, { Component } from 'react';
import Button from './shared/Button';

import { connect } from 'react-redux';
import * as selectors from '../redux/selectors';
import * as actions from '../redux/actions';

class Expense extends Component {
  render() {
    const { name, amount, onRemove } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{amount}</td>
        <td>
          <Button label="Delete" onClick={onRemove} />
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state, ownProps) =>
  selectors.getExpenseById(state, ownProps.id);

const mapDispatchToProps = (dispatch, ownProps) => {
  return { onRemove: () => dispatch(actions.remove(ownProps.id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
