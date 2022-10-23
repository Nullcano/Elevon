import { meta, classes } from '../../../api/classes'
import { slugify } from '$lib/utils'

export async function load({ params }) {
  const { slug } = params
  let previous, next

  const item = classes.find(i => slugify(i.title) === slug)
  const index = classes.indexOf(item)
  
  if (index >= 0 && index < classes.length - 1) {
    previous = classes[index - 1]
    next = classes[index + 1]
  } else if (index >= 1 && index < classes.length) {
    previous = classes[index - 1]
  }

  return {
    category: meta.title,
    item: item,
    previous: previous,
    next: next,
    slug: slug
  }
}