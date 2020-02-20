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

class BudgetForm extends Component {
  state = {
    budget: '',
  };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.budget <= 0) {
      alert('budget must be more then 0');
      return;
    }
    this.props.onSave(this.state.budget);
    this.setState({ budget: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={this.state.budget}
            onChange={this.handleChange}
            placeholder="0"
          />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSave: value => dispatch(actions.saveBudget(value)),
  };
};

export default connect(null, mapDispatchToProps)(BudgetForm);
