import { elements } from '../../../api/elements'
import { slugify } from '$lib/utils'

export async function load({ params }) {
  const { slug } = params

  const currentItem = elements.find(i => slugify(i.title) === slug)
  const currentIndex = elements.indexOf(currentItem)

  return {
    category: "HTML",
    item: currentItem,
    index: `# ${currentIndex + 1} / ${elements.length}`,
    slug: slug
  }
}