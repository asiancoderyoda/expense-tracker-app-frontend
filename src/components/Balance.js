import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

const Balance = () => {

    //const context = useContext(GlobalContext) destructuring to below
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h4>User Balance</h4>
            <h2>Rs {numberWithCommas(total)}</h2>
        </div>
    )
}

export default Balance
