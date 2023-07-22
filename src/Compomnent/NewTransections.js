import { useState } from "react";

import styled from "@emotion/styled";
import { TextField, Typography, Button } from "@mui/material";
import React from "react";

const Container = styled(Typography)`
  display: flex;
  flex-direction: column;

  & > h5,
  & > div,
  & > Button {
    margin-top: 10px;
  }
`;

const NewTransections = ({ setTransaction }) => {
  const [text, setText] = useState(" ");
  const [amount, setAmount] = useState();

  const addTransactions = () => {
    const transaction = {
      id: Math.floor(Math.random() * 100000),
      text: text,
      amount: +amount,
    };
    setTransaction((prevState) => [transaction, ...prevState]);
  };

  return (
    <Container>
      <Typography variant="h5"> New Transaction </Typography>
      <TextField
        label="Enter expense"
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button variant="contained" onClick={() => addTransactions()}>
        {" "}
        Add Transaction
      </Button>
    </Container>
  );
};

export default NewTransections;
