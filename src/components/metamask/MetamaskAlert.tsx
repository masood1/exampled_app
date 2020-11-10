import React from "react";
import metamaskLogo from "./metamask.png";
import { Box } from "@material-ui/core";

const MetamaskAlert = () => {
  return (
    <Box mt={20} ml={20} display='flex' justifyContent='center' alignItems='center'>
      <Box>
        <img src={metamaskLogo} width='250' alt='' />
        <h1>Please Install Metamask</h1>
      </Box>
    </Box>
  );
};

export default MetamaskAlert;
