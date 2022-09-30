import { arctic } from '$lib/data'
import { slugify } from '$lib/utils'

export async function load({ params }) {
  const { slug } = params

  const currentCategory = arctic.find(i => i.items.filter(f => slugify(f.title) === slug))
  const currentItem = currentCategory.items.find(i => slugify(i.title) === slug)
  const currentIndex = currentCategory.items.indexOf(currentItem)

  return {
    category: currentCategory.category.toLowerCase(),
    item: currentItem,
    index: `# ${currentIndex + 1} / ${currentCategory.items.filter(i => i.enabled).length}`,
    slug: slug
  }
}