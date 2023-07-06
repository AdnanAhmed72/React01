import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import React , { useState } from 'react';

const ExpenseItem = (props) => {
    const [amount,updateAmount] = useState(props.amount)
    const changeExpense =() =>{
        updateAmount(100);
        console.log(amount)
    }
    return (
            <div>
                <Card className="expense-item">
                    <ExpenseDate date={props.date}></ExpenseDate>
                    <ExpenseDetails amount={amount}  
                    LocationOfExpenditure={props.LocationOfExpenditure}   title={props.title} />
                    <button onClick={changeExpense}>Change Expense</button>
                </Card>
            </div>
            );
}

export default ExpenseItem;