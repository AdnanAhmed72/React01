import './ExpenseForm.css'
import React, {useState} from 'react'
export default function ExpenseForm(){
    const [enteredTitle,setEnteredTitle] = useState('')
    const [enteredAmount,setEnteredAmount] = useState('')
    const [enteredDate,setEnteredDate] = useState('')
    const titleChangeHandler = (e) =>{
        setEnteredTitle(e.target.value)
        //console.log(e.target.value)
    }
    const amountChangeHandler=(e)=>{
        //console.log(e.target.value)
        setEnteredAmount(e.target.value)
    }
    const dateChangeHandler=(e)=>{
        setEnteredDate(e.target.value)
        //console.log(e.target.value)
    }
    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' step="0.01" min="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button>Add Expense</button>
            </div>
        </form>
    )
};