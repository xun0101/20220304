import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: '',
      email: '',
      age: 0
    }
  },
  actions: {
    setAge (value) {
      thiss.age = value
    }
  },
  getters: {
    isAdult () {
      return this.age >= 18
    }
  }
})