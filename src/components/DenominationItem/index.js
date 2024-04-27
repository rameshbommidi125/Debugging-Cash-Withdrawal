import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  render() {
    const {
      key,
      eachObject,
      decreaseBalanceForId1,
      decreaseBalanceForId2,
      decreaseBalanceForId3,
      decreaseBalanceForId4,
    } = this.props
    const {id, value} = eachObject

    this.onClickDenomination = () => {
      switch (id) {
        case 1:
          decreaseBalanceForId1()
          break
        case 2:
          decreaseBalanceForId2()
          break

        case 3:
          decreaseBalanceForId3()
          break

        default:
          decreaseBalanceForId4()
          break
      }
    }

    return (
      <li className="denomination-item" key={key}>
        <button
          type="button"
          className="denomination-button"
          onClick={this.onClickDenomination}
        >
          {value}
        </button>
      </li>
    )
  }
}
export default DenominationItem
