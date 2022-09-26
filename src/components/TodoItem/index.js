// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deletedList} = props
  const {id, title} = todoItem
  const onDeletedList = () => {
    deletedList(id)
  }
  return (
    <li className="styling">
      <p>{title}</p>
      <button className="button" type="button" onClick={onDeletedList}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
