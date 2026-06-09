import { Tags } from '../blocks/course/list/data.js'

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getTagCounts(tag, courses) {
  if (tag === Tags.ALL) return courses.length
  return courses.filter((course) => course.tag === tag).length
}
