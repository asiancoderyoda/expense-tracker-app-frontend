import './App.css';
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
          <div className="main-container">
              <div className="main-main-container">
                <Header />
              </div>
              <div className="balance">
                <Balance />
              </div>
              <div className="income-expenses">
                <IncomeExpenses />
              </div>
              <div className="transaction-list">
                <TransactionList />
              </div>
              <div className="add-transaction">
                <AddTransaction />
              </div>
          </div>
    </GlobalProvider>      
  );
}

export default App;
