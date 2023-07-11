import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'
const ExpensesList = props =>{
    let message = ''
    let expensesContent = "No expenses found."
    if(props.filteredExpenses.length===0){
        return <h2 className='expenses-list__fallback'>{expensesContent}</h2>
    }else if(props.filteredExpenses.length===1){
        message = <h2>Only single Expense here. Please add more...</h2>
    }
    return (
        <ul className='expenses-list'> 
           { props.filteredExpenses.map((expenses)=>
            <ExpenseItem 
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
            ></ExpenseItem>
            )}
            <div className='expenses-list__fallback'>{message}</div>
            </ul>
    )
}
export default ExpensesList;