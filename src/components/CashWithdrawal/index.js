import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {Balance: 2000}

  onClickDenomination = value => {
    this.setState(prevState =>
      prevState.Balance > 0 && prevState.Balance >= value
        ? {Balance: prevState.Balance - value}
        : null,
    )
  }

  render() {
    const {Balance} = this.state
    const {denominationsList} = this.props
    const customerName = 'Sarah Williams'
    const logoLetter = customerName.slice(0, 1)
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="logo-name-container">
            <div className="logo-container">
              <p className="logo">{logoLetter}</p>
            </div>
            <h1 className="name">{customerName}</h1>
          </div>
          <div className="description-balance-container">
            <p className="description">Your Balance</p>
            <div className="balance-container">
              <p className="balance">{Balance}</p>
              <p className="description size">In Rupees</p>
            </div>
          </div>
          <p className="title">Withdraw</p>
          <p className="description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                listDetails={eachItem}
                key={eachItem.id}
                onClickDenomination={this.onClickDenomination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
