import { ref, watch } from 'vue'

export const useStorage = (key: string, value: any) => {
  const state = ref(value)

  if (key in localStorage) {
    const storedState = localStorage.getItem(key)
    if (storedState) {
      state.value = JSON.parse(storedState)
    }
  }

  watch(state, (newVal) => {
    localStorage.setItem(key, JSON.stringify(newVal))
  })

  return state
}
