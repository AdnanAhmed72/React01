import './ExpenseForm.css'
export default function ExpenseForm(){
    const titleChangeHandler = (e) =>{
        console.log(e.target.value)
        
    }
    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' step="0.01" min="0.01"/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31"/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button>Add Expense</button>
            </div>
        </form>
    )
};