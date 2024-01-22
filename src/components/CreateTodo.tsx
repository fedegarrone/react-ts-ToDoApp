import { useState } from 'react'
import { useTodosContext } from '../hooks/useTodosContext'

export function CreateTodo (): JSX.Element {
  const { addNewTodo } = useTodosContext()
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    addNewTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="new-todo" placeholder="¿Que tenés por hacer?" autoFocus value={inputValue} onChange={(e) => { setInputValue(e.target.value) }}/>
    </form>
  )
}
