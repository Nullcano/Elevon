import { arctic } from '$lib/data'
import { slugify } from '$lib/utils'

export async function load({ params }) {
  const { slug } = params
  return { cat: arctic.find(i => slugify(i.category) === slug) }
}