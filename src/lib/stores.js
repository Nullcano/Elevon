import { writable } from "svelte/store";
export const nightMode = writable(true);
export const showSearch = writable(false);
export const activeCategory = writable(undefined);
export const setActiveCategory = activeCategory.set;
