<script setup lang="ts">
import arrow from "@/assets/images/select-arrow.svg";
import { computed, ref } from "vue";
import { useOutsideClick } from "@/composables/OutsideClick";
import type { SelectItem } from "@/types/app";

/**
 * Select component
 * @property {Array<SelectItem>} items - list options
 * @property {string} modelValue - v-model value select
 */

const props = defineProps<{
  items: Array<SelectItem>;
  modelValue: string;
}>();

const isOpen = ref<boolean>(false);
const select = ref<boolean | Element>();

/**
 * List emit events
 */
const emit = defineEmits(["update:modelValue"]);

/**
 * Computed current value
 */
const currentValue = computed(() => {
  const selected: undefined | SelectItem = props.items.find(
    (item) => item.value === props.modelValue
  );

  return selected ? selected.label : "Выберите значение";
});

/**
 * Outside click handler
 */
useOutsideClick(select, () => {
  isOpen.value = false;
});

/**
 * Change open click handler
 */
const clickHandler = () => {
  isOpen.value = !isOpen.value;
};

/**
 * Change event handler
 */
const clickOptionHandler = (option: SelectItem) => {
  emit("update:modelValue", option.value);
};
</script>

<template>
  <div
    class="s-input-select"
    :class="{ 's-input-select_active': isOpen }"
    @click="clickHandler"
    ref="select"
  >
    <div class="s-input-select__field">
      <span>{{ currentValue }}</span>
      <img :src="arrow" alt="arrow" />
    </div>

    <div class="s-input-select__options">
      <div
        class="s-input-select__option"
        :class="{
          's-input-select__option_active': option.value === modelValue,
        }"
        v-for="option in items"
        :key="option.value"
        @click="clickOptionHandler(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>
