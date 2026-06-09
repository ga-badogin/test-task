import { createInput } from '../../common/input/input.js'
import { createCoursesList } from '../list/list.js'
import { Courses, Tags } from '../list/data.js'
import { updateCount } from '../filter/button/button.js'

export let selectedTag = Tags.ALL
let searchValue = ''

const courseControls = document.querySelector('#course-controls')
courseControls.appendChild(
  createInput({
    placeholder: 'Search course...',
    onChange: (e) => searchCourse(e)
  })
)

export function searchCourse(e, tag) {
  if (e) searchValue = e.target.value.toLowerCase()
  if (tag) selectedTag = tag

  const searchFiltered = Courses.filter((course) =>
    course.title.toLowerCase().includes(searchValue)
  )

  updateCount(searchFiltered)

  const finalFiltered = searchFiltered.filter(
    (course) => selectedTag === Tags.ALL || course.tag === selectedTag
  )

  createCoursesList(finalFiltered)
}
