import React, { Component } from 'react';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

import * as actions from '../redux/actions';
import { connect } from 'react-redux';

const labelStyles = `
  margin-bottom: 16px;  
`;

class ExpenseForm extends Component {
  state = {
    name: '',
    amount: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.amount <= 0) {
      alert('expense amount must be more then 0');
      return;
    }
    if (this.state.name === '') {
      alert('expense name can`t be empty');
      return;
    }
    this.props.onSave({ ...this.state });
    this.setState({ name: '', amount: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
            placeholder="0"
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSave: ({ name, amount }) => dispatch(actions.add({ name, amount })),
  };
};

export default connect(null, mapDispatchToProps)(ExpenseForm);
