import { onUnmounted } from 'vue'
import { defaultWindow, isString } from './utils'

export function useEventListener(...args) {
  let target, event, listener, options

  if (isString(args[0])) {
    [event, listener, options] = args
    target = defaultWindow
  }
  else {
    [target, event, listener, options] = args
  }
  if (target) {
    target.addEventListener(event, listener, options)
    onUnmounted(() => {
      target.removeEventListener(event, listener, options)
    })
  }
}