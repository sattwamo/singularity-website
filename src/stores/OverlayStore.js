import { writable } from "svelte/store"

export const isOverlayOpen = writable(false);
export const name = writable("x");