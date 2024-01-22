import { FILTERS_BUTTONS } from '../const'
import { useTodosContext } from '../hooks/useTodosContext'
import { type FilterValue } from '../types'

export const Filters = (): JSX.Element => {
  const { filter, changeFilter } = useTodosContext()

  return (
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = filter === key
          const className = isSelected ? 'selected' : ''
          return (
            <li key={key}>
              <a
              className={className}
              href={href}
              onClick={(event) => {
                event.preventDefault()
                changeFilter(key as FilterValue)
              }}>
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
