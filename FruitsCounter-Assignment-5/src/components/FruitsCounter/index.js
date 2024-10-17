import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  mango = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
    }))
  }

  banana = () => {
    this.setState(prevState => ({
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="container">
        <p className="heading">
          Bob ate <span>{mango}</span> mangos <span>{banana}</span> bananas
        </p>
        <div className="images">
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            alt="Mango"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            alt="Banana"
          />
        </div>
        <div>
          <button className="mango" onClick={this.mango}>
            Eat Mango
          </button>
          <button className="banana" onClick={this.banana}>
            Eat Banana
          </button>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
