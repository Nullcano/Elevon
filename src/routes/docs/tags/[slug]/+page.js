import { HTMLTags } from '$lib/data'
import { slugify } from '$lib/utils'

export async function load({ params }) {
  const { slug } = params
  return { item: HTMLTags.find((tag) => slugify(tag.tag) === slug) }
}