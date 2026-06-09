import cls from './filter.module.scss'
import { Tags } from '../list/data.js'
import { createFilterButton } from './button/button.js'

const courseControls = document.querySelector('#course-controls')

export function createFilter() {
  const container = document.createElement('div')
  container.className = cls.container

  Object.values(Tags).forEach((tag) => {
    container.appendChild(createFilterButton(tag))
  })

  courseControls.appendChild(container)
}

createFilter()
