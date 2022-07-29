import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const clickHandlerTitle = () => {
    setTitle("Updated!!");
    // console.log({ title });
  };
  const clickHandler = () => {
    setAmount(299);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change Amount</button>
      </div>
      <button onClick={clickHandlerTitle}>Change title</button>
    </Card>
  );
};
export default ExpenseItem;
