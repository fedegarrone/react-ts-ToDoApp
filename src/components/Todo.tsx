import { type Todo as TodoType } from '../types'
import { useTodosContext } from '../hooks/useTodosContext'

interface Props extends TodoType {
  // onRemoveTodo: TodoIdFunction
  // switchCompleted: TodoIdFunction
}

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  const { handleRemove, switchCompleted } = useTodosContext()

  return (
    <div className="view">
      <input type="checkbox" className="toggle" checked={completed} onChange={() => { switchCompleted({ id }) }} />
      <label>{title}</label>
      <button className='destroy' onClick={() => { handleRemove({ id }) }}></button>
    </div>
  )
}
