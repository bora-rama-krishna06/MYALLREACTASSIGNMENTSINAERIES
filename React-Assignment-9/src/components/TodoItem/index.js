import './index.css'
const TodoItem=(props)=>
{
const {TodosList,deleteDo}=props
const {id,title}=TodosList
const doDelete=()=>
{
    deleteDo(id)
}
return(
    <div className="container">
     <div className='dos'> <p>{title}</p> </div>
      <div className='buttons'><button onClick={doDelete}>Delete</button></div>
    </div>
)
}
export default TodoItem