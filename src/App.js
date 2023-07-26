import React,{ useState } from 'react';
import AddUsers from './Components/Users/AddUsers';
import UsersList from './Components/Users/UsersList';
function App() {
  const [userList,setUserList] = useState([])
  const addUserHandler = (uName,uAge,uCol) =>{
    setUserList((prevList)=>{
      return [...prevList,{name:uName,age:uAge,colName:uCol,id:Math.random().toString()}]
    })
  }
  return (
    <React.Fragment>
      <AddUsers onAddUsers={addUserHandler}/>
      <UsersList users={userList}/>
    </React.Fragment>
  );
}

export default App;
