import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AddressInformation = ({ whenSend }) => {
  const [cep, setCep] = useState("");
  const [streetAddress, setStreetAddress] = useState();
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");

  let apiRes = {};

  useEffect(() => {
    if (cep.length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {
          apiRes = res.data;
          setStreetAddress(apiRes.logradouro);
          setState(apiRes.uf);
          setCity(apiRes.localidade);
          setDistrict(apiRes.bairro);
        })
        .catch((err) => console.log(err));
    }
  }, [cep]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (cep.length !== 8) {
          alert(
            "It was not possible to finish you registration, CEP must contain 8 digits"
          );
        } else {
          whenSend({cep, streetAddress, district, state, city, number, complement});
        }
      }}
    >
      <TextField
        onChange={(event) => {
          if (event.target.value.length === 8) {
            setCep(event.target.value);
          }
        }}
        name="cep"
        id="cep"
        label="CEP"
        variant="outlined"
        fullWidth
        margin="dense"
        required
      />

      <TextField
        onChange={(event) => {
          setStreetAddress(event.target.value);
        }}
        value={streetAddress || ""}
        name="streetAddress"
        id="streetAddress"
        label="Street Address"
        variant="outlined"
        margin="dense"
        fullWidth
        required
      />

      <TextField
        style={{ width: "20%" }}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
        name="number"
        id="number"
        label="Number"
        variant="outlined"
        margin="dense"
        required
      />

      <TextField
      style= {{width: '80%'}}
        onChange={(event) => {
          setComplement(event.target.value);
        }}
        name="complement"
        id="complement"
        label="Complement"
        variant="outlined"
        margin="dense"
      />

      <TextField
        style={{ width: "50%" }}
        onChange={(event) => {
          setDistrict(event.target.value);
        }}
        value={district || ""}
        name="district"
        label="District"
        id="district"
        variant="outlined"
        margin="dense"
        required
      />

      <TextField
        style={{ width: "50%" }}
        onChange={(event) => {
          setState(event.target.value);
        }}
        value={state || ""}
        name="state"
        label="State/province"
        id="state"
        variant="outlined"
        margin="dense"
        fullWidth
        required
      />

      <TextField
        onChange={(event) => {
          setCity(event.target.value);
        }}
        value={city || ""}
        name="city"
        label="City"
        id="city"
        variant="outlined"
        fullWidth
        margin="dense"
        color="primary"
        required
      />

      <Button type="submit" variant="contained" color="primary">
        Next
      </Button>
    </form>
  );
};

export default AddressInformation;
