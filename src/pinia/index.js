import { defineStore } from "pinia"

/* 第一个参数为容器的id */
export const mainStore = defineStore('main', {
  state: () => {
    return {
      msg: 'hello world',
      counter: 0
    }
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    },
    doubleMsg() {
      return this.msg + this.msg
    }
  },
  actions: {
    increment() {
      this.counter = this.counter
    },
    addMsg(name) {
      this.msg = this.msg + ' ' + name
    },
  }
})