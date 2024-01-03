import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    //
  },
  actions: {
    addToCart(item) {
      this.items.push(item)
    },
    deleteItem(index) {
      this.items.splice(index, 1)
    },
  },
  persist: true,
})
