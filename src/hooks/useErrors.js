import { useState } from "react";

function useErrors(validations) {
  const [errors, setErrors] = useState({ password: { valid: true, text: "" } });

  function fieldValidation(event) {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = validations[name](value);
    setErrors(newState);
  }

  function validToSend() {
    if (!errors.password.valid) {
      return false;
    }

    return true;
  }

  return [errors, fieldValidation, validToSend];
}

export default useErrors;
