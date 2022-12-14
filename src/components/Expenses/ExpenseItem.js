import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";
import "../NewExpense/ExpenseForm.css";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const [date, setDate] = useState(props.date);
  console.log("ExpenseItem evaluated by React");
  const clickHandlerTitle = () => {
    setTitle("Updated Title!!");
    console.log({ title });
  };
  const clickHandlerAmount = () => {
    setAmount(299);
    console.log({ amount });
  };
  const clickHandlerDate = () => {
    setDate(new Date(2000, 1, 22));
    console.log({ date });
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <button onClick={clickHandlerDate}>Change Date</button>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandlerAmount}>Change Amount</button>
      </div>
      <button onClick={clickHandlerTitle}>Change title</button>
    </Card>
  );
};
export default ExpenseItem;
