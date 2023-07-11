import './ExpenseForm.css'
import React, {useState} from 'react'
export default function ExpenseForm(props){
    const [enteredTitle,setEnteredTitle] = useState('')
    const [enteredAmount,setEnteredAmount] = useState('')
    const [enteredDate,setEnteredDate] = useState('')
    // const titleChangeHandler = (e) =>{
    //     setEnteredTitle(e.target.value)
    //     //console.log(e.target.value)
    // }
    // const amountChangeHandler=(e)=>{
    //     //console.log(e.target.value)
    //     setEnteredAmount(e.target.value)
    // }
    // const dateChangeHandler=(e)=>{
    //     setEnteredDate(e.target.value)
    //     //console.log(e.target.value)
    //}
    const inputChangeHandler = (identifer,value) =>{
        if(identifer === 'title'){
            setEnteredTitle(value)
        }
        else if(identifer === 'amount'){
            setEnteredAmount(value)
        }else{
            setEnteredDate(value)
        }
    }
    const display=(e)=>{
        e.preventDefault();
        const data = {title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        //console.log(data)
        props.onSaveExpenseData(data); 
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }
    return(
        <form onSubmit={display}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={(event)=>inputChangeHandler('title',event.target.value)} 
                    value={enteredTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' step="0.01" min="0.01" 
                    onChange={(event)=>inputChangeHandler('amount',event.target.value)} value={enteredAmount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" 
                    onChange={(event)=>inputChangeHandler('date',event.target.value)} value={enteredDate}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};