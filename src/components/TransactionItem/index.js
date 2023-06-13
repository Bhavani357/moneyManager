// Write your code here
import './index.css'

const TransactionItem = props => {
  const {titleName, amounts, types} = props

  return (
    <li className="box-values">
      <p>{titleName}</p>
      <p>{amounts}</p>
      <p>{types}</p>
      <button type="button" className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
