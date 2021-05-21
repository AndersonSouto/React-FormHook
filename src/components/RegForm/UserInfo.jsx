import {
  FormControlLabel,
  RadioGroup,
  TextField,
  FormControl,
  FormLabel,
  Radio,
  Button,
} from "@material-ui/core";

import React, { useState } from "react";

const UserInfo = ({whenSend}) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setlastName] = useState();
  const [sex, setSex] = useState("female");
  const [phoneNumber, setphoneNumber] = useState();
  const [id, setID] = useState();


  return (
    <form onSubmit={(event)=> {
        event.preventDefault()
        whenSend({firstName, lastName, sex, phoneNumber, id})
        
    }}>
      <TextField
        name="firstName"
        label="First Name"
        id="firstName"
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
        variant="outlined"
        margin="dense"
        color="primary"
        required
        style={{ width: "50%" }}
      />

      <TextField
        name="lastName"
        label="Last Name"
        id="lastName"
        onChange={(event) => {
          setlastName(event.target.value);
        }}
        variant="outlined"
        margin="dense"
        color="primary"
        required
        style={{ width: "50%" }}
      />

      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup row aria-label="gender" name="gender" value={sex} onChange={e => {
            setSex(e.target.value);
        }}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

        <br />

      <TextField
    
        name="phoneNumber"
        label="Phone Number"
        id="phoneNumber"
        onChange={event => {
            setphoneNumber(event.target.value);
        }}
        inputProps={{maxLength: 9 }}
        variant="outlined"
        margin="dense"
        required
        style={{ width: "50%" }}
        />

        <TextField
        name="id"
        label="Id Number"
        id="id"
        onChange={event => {
            setID(event.target.value);
        }}
        variant="outlined"
        margin="dense"
        required
        inputProps={{maxLength: 12}}
        style={{ width: "50%" }}
        />

        <Button type="submit" variant="contained" color="primary">Next</Button>

    </form>
  );
};

export default UserInfo;
