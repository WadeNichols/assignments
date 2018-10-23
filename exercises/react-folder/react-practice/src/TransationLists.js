import React, {Component} from 'react'
import AddForm from "./AddForm";
import transactionData from "./transactionData.json";
import Transaction from "./Transaction"


export default class TransactionList extends Component {
    constructor() {
        super();
        this.state = {
            transactions: transactionData
        }
        this.addTransation = this.addTransation.bind(this);
        this.removeTransaction = this.removeTransaction.bind(this)
        this.editTransaction = this.editTransaction.bind(this)
    }
    
    addTransation(transaction){
        this.setState(prevState => ({
            transactions: [transaction, ...prevState.transaction]
        }))
    }

    removeTransaction(id){
        this.setState(prevState => ({
            transactions: prevState.transactions.filter(transaction => (
                transaction.id !== id
            ))
        }))
    }

    editTransaction(id, newTransaction){
        this.setState(prevState => ({
            transactions: prevState.transactions.map(transaction => (
                id !== transaction.id ? transaction : newTransaction
            ))
        }))
    }

    render() {
        const transComponents = this.state.transactions.map(transaction => (
            <Transaction 
                key={transaction.id}
                {...transaction}
                removeTransaction={this.removeTransaction}
                editTransaction={this.editTransaction} />
        ))
        return (
            <div>
                <AddForm submit={this.addTransaction} />
                <div className="transaction-list-wrapper">
                    <div className="listlabels">
                        <p>ID</p>
                        <p>Title</p>
                        <p>Amount</p>
                        <p>Date</p>
                        <hr/>
                    </div>
                    {transComponents}
                </div>
            </div>
        )
    }
}
