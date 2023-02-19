import { defineStore } from "pinia";
import type { Entity } from "@/types/app";

export const useEntityStore = defineStore("entity", {
  state: () => ({
    current: "",
    list: JSON.parse(localStorage.getItem("entities") || "[]"),
  }),

  actions: {
    add(entity: Entity) {
      this.list.unshift(entity);
      localStorage.setItem("entities", JSON.stringify(this.list));
    },
  },
});
