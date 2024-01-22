import { useContext } from 'react'
import { TodosContext } from '../context/todos'
import { type TodosContextTypes } from '../types'

export const useTodosContext = (): TodosContextTypes => {
  const todosContext = useContext(TodosContext)

  if (todosContext === null) {
    throw Error('TodosContext must be used within a TodosProvider')
  }

  return todosContext
}
