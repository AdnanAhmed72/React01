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
    return(
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} 
            onChangeFilter={filterChangeHandler}></ExpenseFilter>
            {expenses.map((item,index)=>
            <ExpenseItem title={expenses[index].title}
            amount={expenses[index].amount}
            date={expenses[index].date}
            ></ExpenseItem>
            )}
        </Card>
    )
}