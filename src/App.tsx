import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import FinancialRecordProvider from './providers/FinancialRecordProvider';
import Home from './pages/Home';
import Goals from './pages/Goals';

// Bank Account
// Design a simple frontend-only banking system in React that handles operations on bank accounts and sets a savings goal.
// Assume the following:
// There is only one account. No authentication is required. Account state does not need to be saved to a DB or a backend. Maintain it in application state.
// Page 1: Bank account operations

// a. Display account balance at all times
// b. Have 2 buttons that open a modal window containing a form to deposit and withdraw money. Form should have amount and remarks fields.
// c. Display a table showing transaction history

// Page 2: Savings goals

// a. Have a field where you can specify a savings goal amount
// b. Show the comparison of your savings goal and the account balance from Page 1 as a % value.



function App() {
  return (
    <FinancialRecordProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/goals" element={<Goals />}></Route>
        </Routes>
      </BrowserRouter>
    </FinancialRecordProvider>
  );
}

export default App;
