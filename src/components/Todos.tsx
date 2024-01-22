import { useTodosContext } from '../hooks/useTodosContext'
import { Todo } from './Todo'

export const Todos = (): JSX.Element => {
  const { todos } = useTodosContext()

  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <Todo
            title={todo.title}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            />
        </li>
      ))}
    </ul>
  )
}
