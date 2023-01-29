import { useReducer } from "react";
const defaultInputState = {
  enteredInput: "",
  enteredInputTouched: false,
};
const formReducer = (state, action) => {
  if (action.type === "INPUT_CHANGE") {
    return {
      enteredInput: action.val,
      enteredInputTouched: true,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      ...state,
      enteredInputTouched: true,
    };
  }
  if (action.type === "RESET") {
    return defaultInputState;
  }

  return defaultInputState;
};

const useInput = (validate) => {
  const [state, dispatchInput] = useReducer(formReducer, defaultInputState);

  const enteredInputIsValid = validate(state.enteredInput);
  const inputIsInvalid = !enteredInputIsValid && state.enteredInputTouched;

  const inputChangeHandler = (event) => {
    dispatchInput({ type: "INPUT_CHANGE", val: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatchInput({ type: "INPUT_BLUR" });
  };

  const inputClasses = inputIsInvalid ? "form-control invalid" : "form-control";
  const reset = () => {
    dispatchInput({ type: "RESET" });
  };

  return {
    enteredInput: state.enteredInput,
    inputClasses,
    reset,
    enteredInputIsValid,
    inputIsInvalid,
    inputChangeHandler,
    inputBlurHandler,
  };
};
export default useInput;
