import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const deleteExpense = (e) =>{
        const parEle = e.target.parentElement;
        parEle.remove();  
    }
    return (
            <div>
                <Card className="expense-item">
                    <ExpenseDate date={props.date}></ExpenseDate>
                    <ExpenseDetails amount={props.amount}  
                    LocationOfExpenditure={props.LocationOfExpenditure}   title={props.title} />
                    <button className="delbtn" onClick={deleteExpense}>Delete Expense</button>
                </Card>
            </div>
            );
}

export default ExpenseItem;