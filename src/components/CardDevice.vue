<template>
  <div class="flex justify-between items-center p-4 mb-4 bg-white rounded-md shadow-md hover:shadow-lg transition duration-300">
    <div class="flex items-center">
      <p @click="infoDevice(device.id)"
         :class="{
          'text-green-500 font-medium active': device.Value === 'ON',
          'text-red-500 font-medium inactive': device.Value === 'OFF'
         }">
        {{ device.Name }}
      </p>
      <div class="ml-6 text-center flex items-center">
        <p v-if="device.Type === 'Sensor'" class="text-xl flex items-center">
          <span class="text-xl font-bold temperature-icon">
            <i class="fas fa-thermometer-half"></i>
          </span>
          <span class="ml-2">{{ device.Value }}º</span>
        </p>
      </div>
    </div>
    <div v-if="device.Type === 'Executor'">
      <label :for="`toggle-${device.id}`" class="flex items-center cursor-pointer">
        <div class="relative">
          <input :id="`toggle-${device.id}`" type="checkbox" class="sr-only" :checked="device.Value === 'ON'" @change="updateDevice(device.id)">
          <div class="w-12 h-6 bg-gray-300 rounded-full shadow-inner">
            <div class="toggle-dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"
               :class="{ active: device.Value === 'ON' }"></div>
          </div>
        </div>
        <div class="ml-3 font-medium text-lg"
             :class="{
              'text-green-700 active': device.Value === 'ON',
              'text-red-700 inactive': device.Value === 'OFF'
             }">
          {{ device.Value }}
        </div>
      </label>
    </div>
    <div>
      <button class="delete-button rounded-full p-2"
              @click="deleteDevice"
              :class="{ 
                'bg-red-500 hover:bg-red-600': device.Value === 'OFF',
                'bg-green-500 hover:bg-green-600': device.Value === 'ON' 
              }">
        <iconDeleteDevice/>
      </button>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { actualizaFieldDoc,borraDoc } from "@/API/firebase";
import iconDeleteDevice from "../icons/iconDeleteDevice.vue";

const props = defineProps({
  device: Object,
  createDevice: Boolean
});

const data = reactive({
  isActive: props.device.Value === 'ON'
});

const updateDevice = async (deviceId) => {
  const valueToUpdate = props.device.Value === 'ON' ? 'OFF' : 'ON';
  await actualizaFieldDoc("Devices", deviceId, { Value: valueToUpdate });
  data.isActive = valueToUpdate === 'ON';
};

const deleteDevice = async() => {
  await borraDoc("Devices",props.device.id)
};

const infoDevice = (id) => window.open(`http://localhost:5174/${id}`, '_blank')
</script>

<style scoped>
.toggle-dot {
  transition: transform 0.2s;
  background-color: #ff0000;
  border: 2px solid #cccccc;
}

.toggle-dot.active {
  background-color: #48bb78;
  transform: translateX(1.375rem);
  border: none;
}

.delete-button {
  border: none;
  background-color: #f56565;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.delete-button svg {
  width: 20px;
  height: 20px;
  fill: white;
}

.dot.active {
  background-color: #38a169;
  transform: translateX(2.5rem);
}

.active{
  color:green;
}

.inactive{
  color:red;
}
</style>
