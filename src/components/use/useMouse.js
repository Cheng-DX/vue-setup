import { ref } from 'vue'
import { useEventListener } from './useEventListener'

const x = ref(0),
  y = ref(0)
const event = 'mousemove'
const listener = event => {
  x.value = event.pageX
  y.value = event.clientY
}

export function useMouse() {
  useEventListener(window, event, listener)
  return { x, y }
}
