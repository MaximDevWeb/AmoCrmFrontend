<script setup lang="ts">
import { useEntityStore } from "@/stores/entity";

const entityStore = useEntityStore();
</script>

<template>
  <table class="s-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Название</th>
        <th>Тип</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entity in entityStore.list" :key="entity.id">
        <td>{{ entity.id }}</td>
        <td>{{ entity.name }}</td>
        <td>{{ entity.type }}</td>
      </tr>
    </tbody>
  </table>
</template>
