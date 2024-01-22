import { type TODO_FILTERS } from './const'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type TodoList = Todo[]

export type TodoIdFunction = ({ id }: TodoId) => void

export interface TodosContextTypes {
  todos: TodoList
  handleRemove: TodoIdFunction
  switchCompleted: TodoIdFunction
  filter: FilterValue
  changeFilter: (filter: FilterValue) => void
  clearCompletedTodos: () => void
  addNewTodo: ({ title }: TodoTitle) => void
}

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
