import { elements } from '../../../api/elements'
import { slugify } from '$lib/utils'

export async function load({ params }) {
  const { slug } = params
  let nextItem

  const currentItem = elements.find(i => slugify(i.title) === slug)
  const currentIndex = elements.indexOf(currentItem)
  if (currentIndex >= 0 && currentIndex < elements.length - 1) {
    nextItem = elements[currentIndex + 1]
  }

  return {
    category: "HTML",
    item: currentItem,
    previous: currentItem,
    next: nextItem,
    slug: slug
  }
}