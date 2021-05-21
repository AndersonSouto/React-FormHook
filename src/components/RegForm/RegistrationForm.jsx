import React, { useEffect, useState } from "react";
import AddressInformation from "./AddressInformation";
import DataReview from "./DataReview";
import UserData from "./UserData";
import UserInfo from './UserInfo'

function RegistrationForm({getData}) {
  const [data, setData] = useState({});
  const [actualStep, setActualStep] = useState(0);

  useEffect (() => {
    if (actualStep === formPages.length -1) console.log(data)
  }, [data])
  

  const formPages = [<UserData whenSend={colectData} />, <UserInfo whenSend={colectData} />, <AddressInformation whenSend={colectData} />, <DataReview data={data} restartForm={restartForm} /> ];

  function colectData(newData) {
    setData({...data, ...newData});
    next();
  }

  function restartForm() {
    setActualStep(0);
    setData({});
  }

  function next() {
    setActualStep(actualStep + 1);
  }



  return formPages[actualStep];

}

export default RegistrationForm;
