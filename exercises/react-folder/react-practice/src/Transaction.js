import React from 'react'

import EditForm from './EditForm';

function Transaction({id, title, amount, date, removeTransaction, editTransaction}) {
    return (
        <div className="transaction-wrapper">
            <p>{id}</p>
            <EditForm 
                inputs={{id, title, amount, date}} 
                submit={inputs =>
                    editTransaction(id, inputs)
                    alert("Changes have been saved")} />
            <button onClick={() => removeTransaction(id)}>x</button>
            <hr/>
        </div>
    )
}

export default Transaction
