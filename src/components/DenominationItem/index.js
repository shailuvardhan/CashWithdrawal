import './index.css'

const DenominationItem = props => {
  const {listDetails, onClickDenomination} = props
  const {value} = listDetails

  const getDenomination = () => {
    onClickDenomination(value)
  }

  return (
    <li className="list">
      <button type="button" className="btn" onClick={getDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
