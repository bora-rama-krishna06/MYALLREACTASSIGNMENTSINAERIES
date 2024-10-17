import {Component} from 'react'
import './index.css'
class Counter extends Component {
  state = {count: 0}
  onIncre = () => {
    this.setState(prevState => {
      console.log('increment done')
      return {
        count: prevState.count + 1,
      }
    })
  }
  onDecre = () => {
    this.setState(prevState => {
      console.log('decrement done')
      return {
        count: prevState.count - 1,
      }
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="text">Counter </h1>
        <p className="counter">{count}</p>
        <div>
          <button className="button" onClick={this.onIncre}>
            Increment
          </button>
          <button className="button" onClick={this.onDecre}>
            Decrement
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
