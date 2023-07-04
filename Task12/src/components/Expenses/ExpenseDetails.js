import Card from '../UI/Card';
import './ExpenseItem.css'
function ExpenseDetails(props){
    return(
        <Card className="expense-item__description">
            <h2>{props.title}</h2>
            <h2 LocationOfExpenditure={props.LocationOfExpenditure}>{props.LocationOfExpenditure}</h2>
            <div className="expense-item__price"><h3>${props.amount}</h3></div>
        </Card>
    )
}

export default ExpenseDetails;