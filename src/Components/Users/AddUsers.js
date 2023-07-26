import React, { useRef, useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUsers.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
const AddUsers = (props) =>{
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef();

    const [error,setError] = useState();
    const addUserHandler = event =>{
        event.preventDefault();
        const enteredUName = nameInputRef.current.value;
        const enteredUAge = ageInputRef.current.value;
        const enteredCName = collegeInputRef.current.value;
        if(enteredUName.trim().length === 0 || enteredUAge.trim().length ===0){
            setError({title:'Invalid Input',
            message:'Please enter a valid name and age (non empty values)'})
            return;
        }
        if(+enteredUAge < 1){
            setError({title:'Invalid age',
            message:'Please enter a valid age (>0)'})
            return;
        }
        //console.log(enteredUserName,enteredAge)
        
        nameInputRef.current.value='';
        ageInputRef.current.value='';
        collegeInputRef.current.value='';
        props.onAddUsers(enteredUName,enteredUAge,enteredCName);
    }
    
    const errorHandler = () =>{
        setError(null);
    }
    return(
        <Wrapper>
            {error && <ErrorModal title={error.title} 
            message={error.message}
            onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' 
                    ref={nameInputRef}/>
                    <label htmlFor='age'>Age</label>
                    <input type='number' id='age' 
                    ref={ageInputRef}/>
                    <label htmlFor='college'>College Name</label>
                    <input type='text' id='college' 
                    ref={collegeInputRef}/>
                    <Button type='submit'>Add User</Button>
                </form>
                </Card>
        </Wrapper>
    )
}
export default AddUsers;