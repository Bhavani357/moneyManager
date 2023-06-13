import {Component} from 'react'
import {v4} from 'uuid'

import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const moneyDetailsList = [
  {
    id: 'v4',
    state: 'Your Balance',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    amount: 'RS 0',
    color: '#84cc16',
    altWord: 'balance',
  },
  {
    id: 'v4',
    state: 'your Income',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    amount: 'RS 0',
    color: '#06b6d4',
    altWord: 'income',
  },
  {
    id: 'v4',
    state: 'your Expenses',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    amount: 'RS 0',
    color: '#7c3aed',
    altWord: 'expenses',
  },
]

class MoneyManager extends Component {
  state = {title: '', amount: '', type: ''}

  onChangeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  onSelectingOption = event => {
    this.setState({type: event.target.value})
  }

  onSubmittingForm = event => {
    event.preventDefault()

    const {title, amount, type} = this.state

    return (
      <ul className="history-items-container">
        <TransactionItem titleName={title} amounts={amount} types={type} />
      </ul>
    )
  }

  render() {
    const {title, amount, type} = this.state

    return (
      <div className="money-manager">
        <div className="customer-details">
          <h1 className="heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your <span className="span">MoneyManager</span>
          </p>
        </div>
        <ul className="un-ordered-list">
          {moneyDetailsList.map(eachObj => (
            <MoneyDetails key={eachObj.id} eachListItem={eachObj} />
          ))}
        </ul>
        <div className="bottom-container">
          <div className="form-container">
            <h1 className="form-heading">Add Transaction</h1>
            <form onSubmit={this.onSubmittingForm}>
              <label htmlFor="title">Title</label>
              <br />
              <input
                type="text"
                id="title"
                className="input"
                onChange={this.onChangeTitleInput}
                value={title}
              />
              <br />
              <label htmlFor="amount">Amount</label>
              <br />
              <input
                type="text"
                id="amount"
                className="input"
                onChange={this.onChangeAmountInput}
                value={amount}
              />
              <br />
              <label htmlFor="type">Type</label>
              <br />
              <select
                id="type"
                className="input"
                onChange={this.onSelectingOption}
                value={type}
              >
                <option value={transactionTypeOptions[0].optionId}>
                  {transactionTypeOptions[0].displayText}
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <br />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="box-container">
            <h1 className="form-heading">History</h1>
            <div className="box-headings">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
