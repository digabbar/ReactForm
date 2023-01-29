import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    enteredInput: firstName,
    inputClasses: firstNameInputClasses,
    reset: resetfirstName,
    inputIsInvalid: firstNameInputIsInvalid,
    enteredInputIsValid: enteredfirstNameIsValid,
    inputChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
  } = useInput((firstName) => {
    return firstName.trim() !== "";
  });
  const {
    enteredInput: lastName,
    inputClasses: lastNameInputClasses,
    reset: resetlastName,
    inputIsInvalid: lastNameInputIsInvalid,
    enteredInputIsValid: enteredlastNameIsValid,
    inputChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
  } = useInput((lastName) => {
    return lastName.trim() !== "";
  });
  const {
    enteredInput: email,
    inputClasses: emailInputClasses,
    reset: resetemail,
    inputIsInvalid: emailInputIsInvalid,
    enteredInputIsValid: enteredEmailIsValid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput((email) => {
    return email.trim() !== "" && email.includes("@");
  });
  let formIsValid = false;

  if (
    enteredfirstNameIsValid &&
    enteredlastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log({
      firstName,
      lastName,
      email,
    });

    resetfirstName();
    resetlastName();
    resetemail();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
            value={firstName}
          />
          {firstNameInputIsInvalid && (
            <p className="error-text">firstName must not be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={lastName}
          />
          {lastNameInputIsInvalid && (
            <p className="error-text">lastName must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={email}
        />
        {emailInputIsInvalid && (
          <p className="error-text">email must includes '@'</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
