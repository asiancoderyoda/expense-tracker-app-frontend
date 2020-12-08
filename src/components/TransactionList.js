import React, {useContext, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

const TransactionList = () => {

    //const context = useContext(GlobalContext) destructuring to below
    const { transactions, getTransactions } = useContext(GlobalContext);

    //console.log(transactions);

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <div className="trans-List">
            <h3>History</h3>
            <ul className="list" id="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
                
            </ul>
        </div>
    )
}

export default TransactionList
