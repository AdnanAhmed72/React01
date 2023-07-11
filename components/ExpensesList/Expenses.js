import React,{useState} from "react";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
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
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
        </Card>
    )
}