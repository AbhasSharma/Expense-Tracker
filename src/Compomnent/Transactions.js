import { Divider, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AllTransction from "./ExTransction";

const Transactions = ({ transactions, setTransaction }) => {
  return (
    <Box>
      <Typography variant="h5"> Transaction History </Typography>
      <Divider />
      <List>
        {transactions.map((transaction) => (
          <AllTransction
            transaction2={transaction}
            setTransaction={setTransaction}
            transactions={transactions}
          />
        ))}
      </List>
    </Box>
  );
};

export default Transactions;
