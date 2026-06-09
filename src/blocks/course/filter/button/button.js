import cls from './button.module.scss'
import { searchCourse, selectedTag } from '../../search/search.js'
import { capitalize, getTagCounts } from '../../../../utils/utils.js'
import { Courses } from '../../list/data.js'

const courseControls = document.querySelector('#course-controls')

export function createFilterButton(tag) {
  const button = document.createElement('button')

  button.className = `${cls.button} ${selectedTag === tag && cls.active}`
  button.dataset.tag = tag
  button.type = 'button'

  const capitalizedTag = capitalize(tag)
  const tagCount = getTagCounts(tag, Courses)
  button.innerHTML = `
      ${capitalizedTag}<span class="${cls.count}">${tagCount}</span>
    `
  button.addEventListener('click', () => {
    searchCourse(null, tag)
    setActive(tag)
  })

  return button
}

function setActive(tag) {
  courseControls.querySelectorAll(`.${cls.button}`).forEach((el) => {
    el.classList.toggle(cls.active, el.dataset.tag === tag)
  })
}

export function updateCount(courses) {
  document.querySelectorAll(`.${cls.button}`).forEach((el) => {
    el.querySelector(`.${cls.count}`).textContent = getTagCounts(
      el.dataset.tag,
      courses
    )
  })
}
