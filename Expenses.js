import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
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

            {filteredExpenses.map(expenses=>
            <ExpenseItem 
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
            ></ExpenseItem>
            )}
        </Card>
    )
}