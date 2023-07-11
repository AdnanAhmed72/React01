import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
export default function Expenses(props){
    const [filteredYear,setFilteredYear] = useState('2020')
    const expenses = props.expenses
    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear
    })
    
    return(
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} 
            onChangeFilter={filterChangeHandler}></ExpenseFilter>
            <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
        </Card>
    )
}