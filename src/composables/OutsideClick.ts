import { onMounted, onUnmounted, unref } from "vue";
import type { Ref } from "vue";

/**
 * Outside click handler method
 * @param {Ref} target - target element
 * @param {Function} callback - handler function
 */

export function useOutsideClick(target: Ref, callback: Function) {
  const setOutside = (e: Event) => {
    const element = unref(target);

    if (!(element === e.target || element.contains(e.target as Node))) {
      callback();
    }
  };

  onMounted(() => document.addEventListener("click", setOutside));
  onUnmounted(() => document.removeEventListener("click", setOutside));
}
