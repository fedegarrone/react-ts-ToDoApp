import { useTodosContext } from '../hooks/useTodosContext'
import { Filters } from './Filters'

export function Footer (): JSX.Element {
  const { todos, clearCompletedTodos } = useTodosContext()

  const activeAmount = todos.filter(todo => !todo.completed).length
  const completedAmount = todos.length - activeAmount

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeAmount}</strong> tareas restantes
      </span>

      <Filters />

      { completedAmount > 0 && (
        <button className='clear-completed' onClick={clearCompletedTodos}>Borrar Completos</button>
      )}
    </footer>
  )
}
