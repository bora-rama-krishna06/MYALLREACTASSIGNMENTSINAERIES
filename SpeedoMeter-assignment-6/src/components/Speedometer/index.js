import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0, min: 0, max: 200}

  onAcc = () => {
    this.setState(prevState => {
      const {max} = prevState
      if (prevState.speed >= max) {
        console.log('You have crossed the maximum limit')
        return {speed: max}
      }
      return {speed: prevState.speed + 10}
    })
  }

  onBreak = () => {
    const {min} = this.state
    this.setState(prevState => {
      if (prevState.speed <= min) {
        return {speed: prevState.speed}
      }
      return {
        speed: prevState.speed - 10,
      }
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="head">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="SpeedoMeter"
          className="image"
        />
        <p className="meter">Speed Is {speed}mph</p>
        <p className="warn">Min limit is 0mph,Max Limit is 200mph</p>
        <div>
          <button className="speed" onClick={this.onAcc}>
            Accelerate
          </button>
          <button className="break" onClick={this.onBreak}>
            Apply break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
