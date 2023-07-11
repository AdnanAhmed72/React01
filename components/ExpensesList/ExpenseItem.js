import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';
function ExpenseItem(props) {
    const [title,setTitle] = useState(props.title)
    const [amount,setExp] = useState(props.amount)
    const delExpense = (e) =>{
        const item = e.target.parentElement;
        item.remove();
    }
    const changeExp = () =>{
        setExp(100)
        console.log(amount)
    }
    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">{amount}</div>
            <button onClick={delExpense}>Delete Expense</button>
            <button onClick={changeExp}>Change Expense</button>
        </Card>
        </li>
    )
}

export default ExpenseItem;