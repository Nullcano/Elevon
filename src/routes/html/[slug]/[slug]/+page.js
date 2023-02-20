import { meta, elements } from '$lib/api/elements'
import { slugify } from '$lib/utils'

export async function load({ params }) {
  const { slug } = params
  let previous, next

  const item = elements.find(i => slugify(i.title) === slug)
  const index = elements.indexOf(item)
  
  if (index >= 0 && index < elements.length - 1) {
    previous = elements[index - 1]
    next = elements[index + 1]
  } else if (index >= 1 && index < elements.length) {
    previous = elements[index - 1]
  }

  return {
    category: meta.title,
    item: item,
    previous: previous,
    next: next,
    slug: slug
  }
}