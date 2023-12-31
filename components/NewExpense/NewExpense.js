import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
import React,{useState} from "react"
export default function NewExpense(props){
    const [isEditing,setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }

    const startEditing=()=>{
        setIsEditing(true);
    }

    const stopEditing = () =>{
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditing}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
        </div>
    )
};