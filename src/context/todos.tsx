import { createContext, useState } from 'react'
import { type TodoList, type FilterValue, type TodoIdFunction, type TodosContextTypes, type TodoTitle } from '../types'
import { TODO_FILTERS } from '../const'

export const mockTodos = [
  {
    id: '1',
    title: 'Aprender React con TypeScript',
    completed: false
  },
  {
    id: '2',
    title: 'Llorar',
    completed: true
  },
  {
    id: '3',
    title: 'Aprender uso colaborativo de Git',
    completed: false
  },
  {
    id: '4',
    title: 'Llorar 2',
    completed: false
  }
]

export const TodosContext = createContext<TodosContextTypes | null>(null)

type TodoFilterFunction = (todos: TodoList) => TodoList

interface PropChildren {
  children: React.ReactNode
}

export function TodosProvider ({ children }: PropChildren): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)
  const [filter, setFilter] = useState<FilterValue>(TODO_FILTERS.ALL)

  const filterTodos: TodoFilterFunction = (todos) => {
    if (filter === TODO_FILTERS.ACTIVE) return todos.filter(todo => !todo.completed)
    if (filter === TODO_FILTERS.COMPLETED) return todos.filter(todo => todo.completed)
    return todos
  }

  const handleRemove: TodoIdFunction = ({ id }) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const switchCompleted: TodoIdFunction = ({ id }) => {
    const completedTodoIndex = todos.findIndex(todo => (todo.id === id))
    const newTodos = structuredClone(todos)
    newTodos[completedTodoIndex].completed = !newTodos[completedTodoIndex].completed
    setTodos(newTodos)
  }

  const changeFilter = (filter: FilterValue): void => {
    setFilter(filter)
  }

  const clearCompletedTodos = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const addNewTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const filteredTodos = filterTodos(todos)

  return (
    <TodosContext.Provider value={{ todos: filteredTodos, handleRemove, switchCompleted, filter, changeFilter, clearCompletedTodos, addNewTodo }} >
      {children}
    </TodosContext.Provider>
  )
}
