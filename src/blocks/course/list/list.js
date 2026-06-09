import cls from './list.module.scss'
import { createCard } from '../card/card.js'
import { Courses } from './data.js'

const step = 6
let currentLimit = step
let currentCourses = []

const loadMoreButton = document.querySelector('#load-more')
const container = document.querySelector('#course-list')

loadMoreButton.addEventListener('click', loadMore)

export function createCoursesList(courses) {
  currentLimit = step
  currentCourses = courses

  container.replaceChildren()
  appendCards(courses)
  toggleLoadMoreButton(courses)
}

createCoursesList(Courses)

function loadMore() {
  currentLimit += step
  appendCards(currentCourses)
  toggleLoadMoreButton(currentCourses)
}

function appendCards(courses) {
  if (courses.length) {
    courses.slice(currentLimit - step, currentLimit).forEach((item) => {
      container.appendChild(createCard(item))
    })
  } else {
    container.innerHTML = `<span class="${cls.notification}">Nothing found...</span>`
  }
}

function toggleLoadMoreButton(courses) {
  loadMoreButton.style.display =
    currentLimit >= courses.length ? 'none' : 'flex'
}
