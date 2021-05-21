import {
  Button,
  Container,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";

const DataReview = ({ data, restartForm }) => {
  const DarkerDisabledTextField = withStyles({
    root: {
      marginRight: 3,
      "& .MuiInputBase-root.Mui-disabled": {
        color: "rgba(0, 0, 0, 0.6)", //default alpha 0.38
      },
    },
  })(TextField);

  return (
    <Container>
      <Typography component="h2" variant="h5" align="center">
        Before you proceed, check your credentials to see if it's all correct
      </Typography>

      <DarkerDisabledTextField
        style={{ width: "49%" }}
        label="First Name"
        value={data.firstName}
        disabled
        variant="outlined"
        margin="dense"
      />
      <DarkerDisabledTextField
        style={{ width: "49%" }}
        disabled
        label="Last Name"
        value={data.lastName}
        variant="outlined"
        margin="dense"
      />

      <DarkerDisabledTextField
        style={{ width: "49%" }}
        disabled
        label="Sex"
        value={data.sex}
        variant="outlined"
        margin="dense"
      />

      <DarkerDisabledTextField
        style={{ width: "49%" }}
        disabled
        label="Id"
        value={data.id}
        variant="outlined"
        margin="dense"
      />
      <DarkerDisabledTextField
        style={{ width: "49%" }}
        disabled
        label="Phone Number"
        value={data.phoneNumber}
        variant="outlined"
        margin="dense"
      />
      <DarkerDisabledTextField
        style={{ width: "49%" }}
        disabled
        label="Email"
        value={data.email}
        variant="outlined"
        margin="dense"
      />

      <DarkerDisabledTextField
        style={{ width: "49%" }}
        disabled
        label="State"
        value={data.state}
        variant="outlined"
        margin="dense"
      />
      <DarkerDisabledTextField
        style={{ width: "49%" }}
        disabled
        label="City"
        value={data.city}
        variant="outlined"
        margin="dense"
      />
      <DarkerDisabledTextField
        style={{ width: "49%" }}
        disabled
        label="District"
        value={data.district}
        variant="outlined"
        margin="dense"
      />
      <DarkerDisabledTextField
        style={{ width: "98.6%" }}
        disabled
        label="Street Address"
        value={data.streetAddress}
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <DarkerDisabledTextField
        style={{ width: "30%" }}
        disabled
        label="Number"
        value={data.number}
        variant="outlined"
        margin="dense"
      />
      <DarkerDisabledTextField
        style={{ width: "68%" }}
        disabled
        label="Complement"
        value={data.complement}
        variant="outlined"
        margin="dense"
      />
      <br/>
      <br/>

      <Button
        color="primary"
        onClick={() => {
          restartForm();
        }}
        variant="contained"
        fullWidth
      >
        Go back to the first page
      </Button>
      <br/>
      <br/>
      <Button fullWidth color="primary" variant="contained">
        Proceed with the registration
      </Button>
    </Container>
  );
};
export default DataReview;
