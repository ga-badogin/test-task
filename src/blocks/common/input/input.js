import cls from './input.module.scss'
import SearchIcon from '../../../assets/icons/search.svg'

export function createInput({ placeholder, onChange }) {
  const inputContainer = document.createElement('div')
  inputContainer.className = cls.container

  const input = document.createElement('input')
  input.className = cls.input
  input.placeholder = placeholder
  input.addEventListener('input', onChange)

  const icon = document.createElement('img')
  icon.className = cls.icon

  icon.src = String(SearchIcon)
  icon.alt = 'Search'

  inputContainer.append(input, icon)

  return inputContainer
}
