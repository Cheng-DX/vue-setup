import { defineStore } from 'pinia'

export const useCollapseStore = defineStore({
  id: 'collapse',
  state: () => ({
    collapse: true
  }),
  actions: {
    change(){
      this.collapse = !this.collapse
    }
  }
})
