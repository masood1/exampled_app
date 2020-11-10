import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Button, Paper, TextField } from "@material-ui/core";
import citizen from "../../abis/citizen.json";
import { CONTRACT_ADDRESS } from "../../util/constants";
import Loader from "../../components/loader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

const CreateUser = () => {
  const web3 = window.web3;
  var CoursetroContract = web3.eth.contract(citizen);
  var Coursetro = CoursetroContract.at(CONTRACT_ADDRESS);
  const { root } = useStyles();
  const [age, setAge] = useState(0);
  const [response, setResponse] = useState("");
  const [errorCreating, seterrorCreating] = useState(false);

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [note, setNote] = useState("");
  const creatCitizen = () => {
    setLoading(true);
    Coursetro.addCitizen(age, city, name, note, (err: any, response: any) => {
      setLoading(false);
      if (!err) {
        console.log("Dashboard -> response", response);
        setResponse(response);
      } else {
        console.log("Dashboard -> err", err);
        seterrorCreating(true);
      }
    });
  };
  return (
    <Box ml={10} mt={10}>
      <h3>Create citizen</h3>
      <form className={root} noValidate autoComplete='off'>
        <TextField
          id='age'
          label='Age'
          value={age}
          required
          error={age < 18}
          onChange={(event: any) => {
            setAge(event.target.value);
          }}
          helperText={age < 18 ? "Age should be greater than 18" : ""}
          type='number'
          color='secondary'
        />
        <TextField
          id='name'
          label='Name'
          value={name}
          required
          onChange={(event: any) => {
            setName(event.target.value);
          }}
          color='secondary'
        />

        <TextField
          id='name'
          label='City'
          value={city}
          required
          onChange={(event: any) => {
            setCity(event.target.value);
          }}
          color='secondary'
        />

        <TextField
          id='note'
          label='Some Note'
          required
          value={note}
          onChange={(event: any) => {
            setNote(event.target.value);
          }}
          color='secondary'
        />

        <Button
          variant='contained'
          size='large'
          disabled={note === "" && age < 18 && city === "" && name === ""}
          onClick={() => creatCitizen()}
          color='primary'
        >
          Submit
        </Button>
      </form>
      {response !== "" && (
        <Box p={5} mt={10} component={Paper}>
          <h3>Transaction is submitted Hash -- {response}</h3>
        </Box>
      )}

      {errorCreating && (
        <Box p={3} mt={10} component={Paper}>
          <h1>Oops!! Somthing went wrong please try again</h1>
        </Box>
      )}

      <Loader enable={loading} />
    </Box>
  );
};

export default CreateUser;
