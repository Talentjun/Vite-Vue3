import { computed } from 'vue'
import { mapState, useStore } from 'vuex'
export default function (state) {
  const store = useStore()

  // const storeStateFns = mapState(state) // 没有模块拆分的写法
  const storeStateFns = mapState('user', state) // 有模块拆分的写法

  const storeState = {}
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({ $store: store })
    storeState[fnKey] = computed(fn)
  })
  return storeState
}