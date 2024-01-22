import { CreateTodo } from './CreateTodo'

export function Header (): JSX.Element {
  return (
    <header className="header">
      <h1>Garro-ToDos</h1>
      <CreateTodo/>
    </header>
  )
}
