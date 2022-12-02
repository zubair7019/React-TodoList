import React, { useState,useRef } from 'react';

import Card from '.././Users/UI/Card';
import Button from '.././Users/UI/Button';
import ErrorModal from '.././Users/UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {

const nameInputRef=useRef();
const ageInputRef=useRef();
const collegeInputref=useRef()

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(nameInputRef.current.value)
    // console.log(ageInputRef.current.value)
    const enteredName=nameInputRef.current.value
    const enteredUserAge=ageInputRef.current.value
    const enteredUsercollege=collegeInputref.current.value

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredUsercollege.trim().length===0 ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    // props.onAddUser(enteredUsername, enteredAge);
    props.onAddUser(enteredName, enteredUserAge,enteredUsercollege);
    nameInputRef.current.value='';
    nameInputRef.current.value='';
    collegeInputref.current.value='';
    // setEnteredUsername('');
    // setEnteredAge('');
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <label htmlFor="collegename">College Name</label>
          <input
            id="college"
            type="text"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={collegeInputref}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
