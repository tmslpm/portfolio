import { onMounted, onUnmounted } from 'vue'

export function useEventListener<K extends keyof HTMLElementEventMap | string>(
    eventTarget: any,
    type: K,
    listener: any,
    options?: boolean | AddEventListenerOptions
): void {
    // if you want, you can also make this
    // support selector strings as target
    onMounted(() => eventTarget.addEventListener(type, listener, options));
    onUnmounted(() => eventTarget.removeEventListener(type, listener, options));
  
}
