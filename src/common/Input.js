import React from "react";
import Alert from "@material-ui/lab/Alert";

import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
const Input = ({ label, error, name, ...rest }) => {
  return (
    <Box my={1}>
      <TextField
        margin={"none"}
        size="small"
        fullWidth={true}
        id={name}
        {...rest}
        label={label}
        name={name}
        variant="outlined"
      />
      {error && <Alert severity="error">{error}</Alert>}
    </Box>
  );
};

export default Input;
