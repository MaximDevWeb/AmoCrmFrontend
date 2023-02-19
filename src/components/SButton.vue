<script setup lang="ts">
import { computed } from "vue";
import { ButtonType } from "@/types/app";
import { values } from "lodash";
import preloader from "@/assets/images/preloader.svg";

/**
 * Button component
 * @property {string} type - style class
 * @property {string} size - style size
 * @property {boolean} inactive - inactive button
 */

const props = defineProps({
  type: {
    type: String,
    default: ButtonType.PRIMARY,
    validator: (value: string) =>
      (values(ButtonType) as Array<string>).includes(value),
  },
  size: {
    type: String,
    default: "",
    validator: (value: string) => ["", "sm"].includes(value),
  },
  inactive: {
    type: Boolean,
    default: false,
  },
  load: {
    type: Boolean,
    default: false,
  },
});

/**
 * Computed classes for button
 */
const style = computed<string>(() => {
  let result = "s-button";

  result += ` s-button_${props.type}`;
  result += props.size ? ` s-button_${props.size}` : "";
  result += props.inactive || props.load ? " s-button_inactive" : "";

  return result;
});
</script>

<template>
  <button :class="style" type="button">
    <slot />

    <span class="s-button__loader" v-show="load">
      <img :src="preloader" />
    </span>
  </button>
</template>
