import React, { useState } from "react";
import AdressInformation from "./AdressInformation";
import UserData from "./UserData";

function RegistrationForm() {
  const [data, setData] = useState({});
  const [actualStep, setActualStep] = useState(0);

  const formPages = [<UserData whenSend={colectData} />, <AdressInformation whenSend={colectData} />];

  function colectData({ newData }) {
    setData({...data, ...newData});
    next();
  }

  function next() {
    setActualStep(actualStep + 1);
  }



  return formPages[actualStep];

}

export default RegistrationForm;
