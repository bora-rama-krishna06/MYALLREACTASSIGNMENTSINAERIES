import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class TodoList extends Component {
    state={TodosList:initialTodosList}
    deleteDo=(id)=>
        {
            console.log(id)
            const{TodosList}=this.state
            const updatedTodosList=TodosList.filter((eachItem)=>
            {
                return eachItem.id!==id
            })
            this.setState({
                TodosList:updatedTodosList
            })
        }
  render()
  {
    const {TodosList}=this.state
   
    return(
        <div className='container1'>
        <h1 className='head'>Simple Todos</h1>
        <ul className='list'>
          {TodosList.map(eachItem => (
                <TodoItem key={eachItem.id} TodosList={eachItem} deleteDo={this.deleteDo}/>
             ) )}
        </ul>
      </div>
    )
  }
}
export default TodoList