import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  decreaseBalanceForId1 = () => {
    this.setState(prevState => ({balance: prevState.balance - 50}))
  }

  decreaseBalanceForId2 = () => {
    this.setState(prevState => ({balance: prevState.balance - 100}))
  }

  decreaseBalanceForId3 = () => {
    this.setState(prevState => ({balance: prevState.balance - 200}))
  }

  decreaseBalanceForId4 = () => {
    this.setState(prevState => ({balance: prevState.balance - 500}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {balance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachObject => (
              <DenominationItem
                eachObject={eachObject}
                key={eachObject.id}
                decreaseBalanceForId1={this.decreaseBalanceForId1}
                decreaseBalanceForId2={this.decreaseBalanceForId2}
                decreaseBalanceForId3={this.decreaseBalanceForId3}
                decreaseBalanceForId4={this.decreaseBalanceForId4}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
