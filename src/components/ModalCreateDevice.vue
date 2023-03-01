<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-lg font-medium mb-4">Add Device</h2>
      <form class="grid grid-cols-2 gap-4" @submit.prevent="addDevice">
        <div class="flex flex-col">
          <label for="name" class="mb-1 font-medium">Name:</label>
          <input
            id="name"
            v-model="form.name"
            class="p-2 rounded-lg border-gray-300"
            type="text"
            required
          />
        </div>
        <div class="flex flex-col">
          <label for="type" class="mb-1 font-medium">Type:</label>
          <select
            id="type"
            v-model="form.type"
            class="p-2 rounded-lg border-gray-300"
            required
          >
            <option value="Sensor">Sensor</option>
            <option value="Executor">Executor</option>
          </select>
        </div>
        <div class="flex flex-col" v-if="form.type === 'Sensor'">
          <label for="value" class="mb-1 font-medium">Value:</label>
          <input
            id="value"
            v-model="form.value"
            class="p-2 rounded-lg border-gray-300"
            type="number"
            required
          />
        </div>
        <div class="flex flex-col" v-else>
          <label class="mb-1 font-medium">Value:</label>
          <button
            class="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg"
            :class="
              form.value === 'OFF'
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-green-500 hover:bg-green-600'
            "
            @click.prevent="form.value = form.value === 'OFF' ? 'ON' : 'OFF'"
          >
            {{ form.value }}
          </button>
        </div>
        <div class="col-span-2">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
            @click="handleSubmit"
          >
            Add Device
          </button>
          <button
            type="button"
            class="ml-4 text-gray-600 font-medium py-2 px-4 rounded-lg"
            @click="cancelForm"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { anadir, dameDocsFiltro } from "../API/firebase";

const props = defineProps({
  room: String,
});

const emits = defineEmits(['close-modal'])

const form = ref({
  name: "",
  type: "Executor",
  value: "OFF",
});



const cancelForm = () => {
  form.value.name = "";
  form.value.type = "Sensor";
  form.value.value = "";
  emits('close-modal');
};

const addDevice = async () => {
  // Agregar el dispositivo a la base de datos
  const device = {
    Name: form.value.name,
    Type: form.value.type,
    Value: form.value.value,
    Room: props.room,
  };
  // Consultar la base de datos para ver si ya existe un dispositivo con el mismo nombre en la misma habitación
  const devices = await dameDocsFiltro("Devices", "Name", device.Name);
  if (devices.length > 0) {
    alert("Ya existe un dispositivo con ese nombre en esta habitación.");
    form.value.name=""
    return;
  } else {
    await anadir("Devices", device);
  }
  emits('close-modal');
};

</script>
