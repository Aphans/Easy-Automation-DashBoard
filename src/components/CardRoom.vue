<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="bg-gray-900 h-32 w-full flex items-center justify-center">
      <iconRoom />
      <h2 class="text-white text-2xl">{{ Name }}</h2>
      <div class="relative ml-4">
        <input
          v-show="editName"
          v-model="newName"
          @keydown.enter="saveName(Name, id, newName)"
          @blur="saveName(Name, id, newName)"
          class="text-gray-900 text-2xl font-bold w-full px-2 py-1 rounded-lg border-2 border-gray-300 outline-none transition duration-500 ease-in-out transform hover:border-blue-500 hover:scale-105"
        />
        <button
          @click="editName = true"
          v-show="!editName"
          class="ml-2 focus:outline-none"
        >
          <svg
            class="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M9 22V14m0-4V6m6 8l3 1.5m0 0L15 14m3-1.5L15 11"
            ></path>
          </svg>
        </button>
        <button
          @click="editName = false; saveName(Name, id, newName)"
          v-show="editName"
          class="ml-2 focus:outline-none"
        >
          <svg
            class="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-lg font-semibold mb-2">Description:</h3>
      <p class="text-gray-600 mb-4">{{ Description }}</p>
      <h3 class="text-lg font-semibold mb-2">Devices:</h3>
      <div class="grid grid-cols-1 gap-4">
        <CardDevice v-for="dev in device" :key="dev.id" :device="dev" />
        <button
          @click="createDevice = true"
          class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md"
        >
         <iconCreateDevice/>
          <span>Create Device</span>
        </button>
        <div v-if="createDevice">
          <ModalCreateDevice :room="props.Name" :showModal="true" @close-modal="createDevice = false" />

        </div>
      </div>
      <div class="mt-8 flex justify-end">
        <button
  @click="moveDevices = true"
  class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg ml-4"
>
  Move Devices
</button>
        <button
          @click="showDeleteModal = true"
          class="bg-white hover:bg-gray-100 text-red-500 font-medium py-2 px-4 border border-red-500 rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Delete Room
        </button>
      </div>
    </div>

    <!-- Delete Modal Rooms + Devices -->
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      v-show="showDeleteModal"
      @click.away="showDeleteModal = false"
    >
      <div class="flex items-center justify-center min-h-screen">
        <div class="bg-white w-96 rounded-lg shadow-lg p-6">
          <h2 class="text-2xl font-semibold mb-4">Delete Room</h2>
          <p class="text-gray-600 mb-4">
            Are you sure you want to delete this room and all of its devices?
          </p>
          <div class="flex justify-end">
            <button
              @click="showDeleteModal = false"
              class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2"
            >
              Cancel
            </button>
            <button
              @click="deleteRoomAndDevices"
              class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Move Devices Modal -->
<div
  class="fixed z-10 inset-0 overflow-y-auto"
  v-show="moveDevices"
  @click.away="moveDevices = false"
>
  <div class="flex items-center justify-center min-h-screen">
    <div class="bg-white w-96 rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">Move Devices</h2>
      <p class="text-gray-600 mb-4">
        Select a room to move the devices to:
      </p>
      <div class="grid grid-cols-1 gap-4">
  <div v-for="room in rooms" :key="room.id">
    <button
      v-if="room.Name !== Name"
      @click="moveDevicesToRoom(room.Name)"
      class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
    >
      {{ room.Name }}
    </button>
  </div>
</div>
      <div class="flex justify-end mt-4">
        <button
          @click="moveDevices = false"
          class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import CardDevice from "./CardDevice.vue";
import ModalCreateDevice from "./ModalCreateDevice.vue";
import { dameDocs,borraDoc, actualizaDocsFiltro,actualizaFieldDoc,borraDocsFiltro } from "@/API/firebase";
import iconRoom from "../icons/iconRoom.vue";
import iconCreateDevice from "../icons/iconCreateDevice.vue";

const props = defineProps({
  id: String,
  Name: String,
  Description: String,
  device: Object,
  rooms:Array
});

const editName = ref(false);
const newName = ref('');


const showDeleteModal = ref(false);
const createDevice = ref(false);
const moveDevices = ref(false);

const deleteRoomAndDevices = async () => {
  borraDoc("Rooms", props.id);
  borraDocsFiltro("Devices", "Room", props.Name);
  showDeleteModal.value = false;
};

const moveDevicesToRoom = async (newRoom) => {
  await actualizaDocsFiltro("Devices", "Room", props.Name, { Room: newRoom });
  moveDevices.value = false;
};

const saveName = async (NameRoom, idRoom, newName) => {
  // Actualiza el nombre de la sala
  await actualizaFieldDoc("Rooms", idRoom, { Name: newName });

  // Actualiza el campo "Room" de los dispositivos que pertenecen a la sala
  const querySnapshot = await dameDocs("Devices");
  querySnapshot.forEach((doc) => {
    if (doc.data().Room === NameRoom) {
      actualizaFieldDoc("Devices", doc.id, { Room: newName });
    }
  });
}


</script>
