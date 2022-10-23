import { writable } from 'svelte/store'

export const itemFilter = writable({
    search: '',
    category: null
})

export function updateSearchValue(searchValue) {
  itemFilter.update(filter => {
    filter.search = searchValue;
    return filter;
  })
}

export function updateCategoryValue(selectedCategory) {
  itemFilter.update(filter => {
    filter.category = selectedCategory;
    return filter;
  })
}