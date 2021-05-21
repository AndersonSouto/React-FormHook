import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import FormValidation from "../../context/FormValidation";
import useErrors from "../../hooks/useErrors";

const UserData = ({whenSend}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validation = useContext(FormValidation);
  const [errors, fieldValidation, validToSend] = useErrors(validation);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (validToSend()) {
            whenSend({email, password})
        } 
      }}
    >
      <TextField
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        type="email"
        name="email"
        label="email"
        id="email"
        variant="outlined"
        required
        fullWidth
        margin="dense"
      />

      <TextField
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        onBlur={fieldValidation}
        error={!errors.password.valid}
        helperText={errors.password.text}
        type="password"
        name="password"
        label="password"
        id="password"
        variant="outlined"
        required
        margin="dense"
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Next
      </Button>
    </form>
  );
}

export default UserData;
