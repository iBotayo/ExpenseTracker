import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const [openForm, setOpenForm] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setOpenForm(false);
  };

  const openFormHandler = () => {
    setOpenForm(true);
  };

  const closeFormHandler = () => {
    setOpenForm(false);
  };

  return (
    <div className="new-expense">
      {!openForm && <button onClick={openFormHandler}>Add New Expenses</button>}
      {openForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelHandler={closeFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
