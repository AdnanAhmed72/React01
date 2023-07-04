import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure : 'Bangalore'
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),LocationOfExpenditure : 'Mangalore' },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure : 'Delhi'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure : 'Mumbai'
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
        {expenses.map((item, index) => <ExpenseItem title = {expenses[index].title} 
        amount = {expenses[index].amount}
        date = {expenses[index].date}
        LocationOfExpenditure = {expenses[index].LocationOfExpenditure}></ExpenseItem>)}
    </div >
    
  );
}

export default App;
