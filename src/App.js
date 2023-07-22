import "./App.css";
import Balance from "./Compomnent/Balance";
import { Typography, styled, Box } from "@mui/material";
import ExpenseCard from "./Compomnent/ExpenseCard";
import NewTransections from "./Compomnent/NewTransections";
import Transactions from "./Compomnent/Transactions";
import { useState } from "react";
import Graph from "./Compomnent/Graph";

const Header = styled(Typography)`
  font-size: 36px;
  color: Black;
  text-transform: uppercase;
`;

const Component = styled(Box)`
  display: flex;
  background: linear-gradient(to bottom, #ccffff 0%, #ffcc99 100%);
  width: 900px;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
  & > div {
    height: 60vh;
    width: 50%;
    padding: 10px;
  }
`;

function App() {
  const [transactions, setTransaction] = useState([]);

  return (
    <div className="App">
      <Header> Expense tracker</Header>

      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransections setTransaction={setTransaction} />
        </Box>
        <Box>
          <Transactions
            transactions={transactions}
            setTransaction={setTransaction}
          />
        </Box>
        <Box>
          <Graph transactions={transactions} />
        </Box>
      </Component>
    </div>
  );
}

export default App;
