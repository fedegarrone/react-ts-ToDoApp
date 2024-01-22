import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { TodosProvider } from './context/todos'

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

function App (): JSX.Element {
  return (
    <div className='todoapp'>
      <TodosProvider>
        <Header/>
        <Todos/>
        <Footer/>
      </TodosProvider>
    </div>
  )
}

export default App
