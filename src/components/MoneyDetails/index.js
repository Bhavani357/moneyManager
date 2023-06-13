import './index.css'

const MoneyDetails = props => {
  const {eachListItem} = props
  const {id, state, imageUrl, amount, color, altWord} = eachListItem

  return (
    <li className="li-container">
      <img src={imageUrl} className="image" alt={altWord} />
      <div>
        <p className="amount-status-heading">{state}</p>
        <p className="amount">{amount}</p>
      </div>
    </li>
  )
}

export default MoneyDetails
