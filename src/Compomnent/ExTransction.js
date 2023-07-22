import styled from "@emotion/styled";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";

const Detail = styled(ListItem)`
  margin-top: 10px;
`;
const AllTransction = ({ transaction2, setTransaction, transactions }) => {
  const color = transaction2.amount > 0 ? "Green" : "Red";

  const deleteTransaction = (id) => {
    setTransaction(
      transactions.filter((transaction2) => transaction2.id !== id)
    );
  };

  return (
    <Detail style={{ background: `${color}`, color: "white" }}>
      <ListItemIcon>
        <DeleteIcon onClick={() => deleteTransaction(transaction2.id)} />
      </ListItemIcon>
      <ListItemText>{transaction2.text}</ListItemText>
      <ListItemText>{transaction2.amount}</ListItemText>
    </Detail>
  );
};

export default AllTransction;
