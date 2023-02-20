import { meta, elements } from '$lib/api/elements'
import { slugify } from '$lib/utils'

export async function load({ params }) {
  const { slug } = params
  const items = elements.filter(i => slugify(i.category) === slug)
}