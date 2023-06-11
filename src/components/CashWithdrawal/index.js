// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawAmount = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="withdraw-main-con">
        <div className="withdraw-card">
          <div className="withdraw-profile-con">
            <div className="profile-logo">S</div>
            <p className="profile-name">Sarah Williams</p>
          </div>

          <div className="withdraw-balance-con">
            <p className="side-text">Your balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>

          <div>
            <p className="sub-heading">Withdraw</p>
            <p className="side-text">CHOOSE SUM (IN RUPEES)</p>
          </div>

          <ul className="denomination-items-con">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationItem={eachItem}
                withdrawAmount={this.withdrawAmount}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
