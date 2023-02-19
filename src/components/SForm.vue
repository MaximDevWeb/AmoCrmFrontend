<script setup lang="ts">
import type { Entity, SelectItem } from "@/types/app";
import { ButtonType } from "@/types/app";
import { useEntityStore } from "@/stores/entity";
import SInputSelect from "@/components/SInputSelect.vue";
import SButton from "@/components/SButton.vue";
import SInputText from "@/components/SInputText.vue";
import { computed, ref } from "vue";
import http from "@/modules/http";
import { AxiosError } from "axios";

const options: Array<SelectItem> = [
  { value: "", label: "Не выбрано" },
  { value: "leads", label: "Сделка" },
  { value: "contacts", label: "Контакт" },
  { value: "companies", label: "Компания" },
];

const entityStore = useEntityStore();
const entityName = ref<string>("");
const load = ref<boolean>(false);

const typeButton = computed(() => {
  return entityStore.current && entityName.value
    ? ButtonType.PRIMARY
    : ButtonType.LIGHT;
});

const inactiveButton = computed(() => {
  return !(entityStore.current && entityName.value);
});

const createEntity = () => {
  load.value = true;

  const data: Entity = {
    name: entityName.value,
    type: entityStore.current,
  };

  http
    .post("/entity/store", data)
    .then((response) => {
      entityStore.add(response.data);
      entityName.value = "";
      entityStore.current = "";
    })
    .catch((e: AxiosError) => {
      if (e.response) {
        console.log(e.response.data);
      }
    })
    .then(() => {
      load.value = false;
    });
};
</script>

<template>
  <div class="s-form">
    <p>Создать элемент:</p>

    <s-input-text
      placeholder="Введите название"
      v-model="entityName"
      class="mx-1"
    />

    <s-input-select :items="options" v-model="entityStore.current" />

    <s-button
      :inactive="inactiveButton"
      :type="typeButton"
      :load="load"
      class="mx-1"
      @click="createEntity"
    >
      Создать
    </s-button>
  </div>
</template>
