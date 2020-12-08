import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';


//export const Transaction = (transaction) => { ---.transaction.transaction.text i.e. props.value --transaction destructuring
export const Transaction = ({transaction}) => {

    const { deleteTransaction } = useContext(GlobalContext);

    //get sign
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign} Rs. {numberWithCommas(Math.abs(transaction.amount))}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
        </li>
    )
}
