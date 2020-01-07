import React, { Component } from 'react';
import styled from 'styled-components';
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';
import Values from './Values';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

export default class App extends Component {
  render() {
    return (
      // <Container>
      //   <BudgetForm onSave={this.saveBudget} />
      //   <Values budget={budget} expenses={totalExpenses} balance={balance} />
      //   <ExpenseForm onSave={this.addExpense} />
      //   {expenses.length > 0 && (
      //     <ExpensesTable items={expenses} onRemove={this.removeExpense} />
      //   )}
      // </Container>
      <Container>
        <BudgetForm />
        <Values />
        <ExpenseForm />
        <ExpensesTable />
      </Container>
    );
  }
}
