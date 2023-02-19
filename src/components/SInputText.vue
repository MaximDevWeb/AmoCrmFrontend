<script setup lang="ts">
/**
 * Button component
 * @property {string} type - type input
 * @property {string} placeholder - placeholder input
 * @property {boolean} inactive - v-model value input
 */

defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "Введите значение",
  },
  modelValue: {
    type: String,
  },
});

/**
 * List emit events
 */
const emit = defineEmits(["update:modelValue"]);

/**
 * Input event handler
 */
const inputHandler = (e: InputEvent) => {
  const target = e.currentTarget as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div class="s-input-text">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="inputHandler"
    />
  </div>
</template>
