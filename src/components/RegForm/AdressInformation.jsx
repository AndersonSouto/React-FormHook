import { TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TagTeste from "./TagTeste";

const AdressInformation = () => {
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState();
  const [bairro, setBairro] = useState();
  const [uf, setUf] = useState();
  let apiRes = {};

  useEffect(() => {
    if (cep.length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {
          apiRes = res.data;
          console.log(apiRes)
          setRua(apiRes.logradouro);
        })
        .catch((err) => console.log(err));
    }
  }, [cep]);

  return (
    <form>
      <TextField
        onChange={(event) => {
          if (event.target.value.length === 8) {
            setCep(event.target.value);
          }
        }}

        name="cep"
        id="cep"
        label="cep"
        variant="outlined"
        fullWidth
        margin="dense"
      />


      <TextField 
      onChange={(event) => {
        setRua(event.target.value);
      }}
      value={rua}
      name="rua"
      id="rua"
      label="rua"
      variant="outlined"
      />
    </form>
  );
};

export default AdressInformation;
