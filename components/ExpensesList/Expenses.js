import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
export default function Expenses(props){
    const expenses = props.expenses
    return(
        <Card className="expenses">
            
            {expenses.map((item,index)=>
            <ExpenseItem title={expenses[index].title}
            amount={expenses[index].amount}
            date={expenses[index].date}
            ></ExpenseItem>
            )}
        </Card>
    )
}