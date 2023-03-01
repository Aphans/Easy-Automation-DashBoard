import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const storeRoom = defineStore("room", () => {
  const rooms = ref([]);
  return { rooms};
}
);
