import { Container, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "./App.css";
import RegistrationForm from "./components/RegForm/RegistrationForm";
import FormValidation from "./context/FormValidation";
import { passwordValidation } from "./models/registration";

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography align="center" variant="h3" component="h1">
          Registration Form
        </Typography>

        <FormValidation.Provider value={{ password: passwordValidation }}>
          <RegistrationForm getData={getData} />
        </FormValidation.Provider>
      </Container>
    );
  }
}

function getData(data) {
  console.log(data);
}

export default App;
