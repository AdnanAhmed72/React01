import React, { useEffect, useState,useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state,action) =>{
  if(action.type === 'USER_INPUT'){
    return {value:action.val,isValid:action.val.includes('@')};
  }
  if(action.type === 'INPUT_BLUR'){
    return {value:state.value,isValid:state.value.includes('@')};
  }
  //return {value:'',isValid:false};
}
const passwordReducer = (state,action) =>{
  if(action.type === 'INPUT_PASSWORD'){
    return {value:action.val,isValid:action.val.length > 6}
  };
  if(action.type === 'INPUT_BLUR'){
    return {value:state.value,isValid:state.value.length > 6}
  };
}

const Login = (props) => {

  const [enteredColName,setEnteredColName] = useState('');
  const [collegeIsValid,setColIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatcEmail] = useReducer(emailReducer,
    {value:'',isValid:null});
  const [passwordState,dispatchPassword] = useReducer(passwordReducer,
    {value:'',isValid:null});

  useEffect(()=>{
    const identifier = setTimeout(() => {
      console.log('Checking Form Validity');
      setFormIsValid(
      emailState.isValid && passwordState.isValid)
    }, 500);
    return () =>{
      console.log('CLEANUP')
      clearTimeout(identifier)
    }
  },[emailState,passwordState]);

  const emailChangeHandler = (event) => {
    dispatcEmail({type:'USER_INPUT',val:event.target.value})

    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6 
    //   && enteredColName.trim().length > 3
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'INPUT_PASSWORD',val:event.target.value})

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };

  const colNameChangeHandler = (event) =>{
    setEnteredColName(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 3 && emailState.isValid
      && passwordState.isValid.length > 6
    );
  }

  const validateEmailHandler = () => {
    dispatcEmail({type:'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR'})
  };

  const validateColNameHandler = () =>{
    setColIsValid(enteredColName.trim().length > 3);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={`${classes.control} ${
            collegeIsValid === false ? classes.invalid : ''
          }`}>
          <label htmlFor="college">College Name</label>
            <input
              type="text"
              id="college"
              value={enteredColName}
              onChange={colNameChangeHandler}
              onBlur={validateColNameHandler}/>
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
