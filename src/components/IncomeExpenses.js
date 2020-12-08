import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';


const IncomeExpenses = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item),0) * -1).toFixed(2);

    return (
        <div className="iecont">
            <div className="income" id="income">
                <h4>Income</h4>
                <h2>Rs {numberWithCommas(income)}</h2>
            </div>
            <div className="expense" id="expense">
                <h4>Expense</h4>
                <h2>Rs {numberWithCommas(expense)}</h2>
            </div>
        </div>
    )
}

export default IncomeExpenses
