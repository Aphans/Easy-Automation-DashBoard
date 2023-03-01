<template>
  <div class="p-12">
    <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 class="text-3xl font-semibold mb-4 text-gray-800">Stats</h2>
      <div class="grid grid-cols-2 gap-4">
        <div
          class="bg-blue-400 rounded-lg p-6 flex flex-col items-center justify-center text-white"
        >
          <h3 class="text-2xl font-semibold">{{ rooms.length }}</h3>
          <p class="text-lg">Rooms</p>
          <iconCountRooms/>
        </div>
        <div
          class="bg-purple-400 rounded-lg p-6 flex flex-col items-center justify-center text-white"
        >
          <h3 class="text-2xl font-semibold">{{ countDevices }}</h3>
          <p class="text-lg">Devices</p>
            <iconCountDevices/>
        </div>
      </div>
    </div>
    <FormCreateRoom />
    <div class="grid grid-cols-2 gap-6">
      <CardRoom
        v-for="room in rooms"
        :key="room.id"
        :id="room.id"
        :Name="room.Name"
        :Description="room.Description"
        :device="room.Devices"
        :rooms="rooms"
      >
      </CardRoom>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted,computed } from "vue";
import CardRoom from "../components/CardRoom.vue";
import FormCreateRoom from "../components/FormCreateRoom.vue";
import { giveCollection} from "@/API/firebase";
import iconCountRooms from "../icons/iconCountRooms.vue";
import iconCountDevices from "../icons/iconCountDevices.vue";

//Se crea la constante rooms para almacenar las salas

const rooms = ref([]);


//Se cargan las salas y los dispositivos
onMounted(() => {
  loadRoomsAndDevices();
});

const loadRoomsAndDevices = async () => {
  await giveCollection("Rooms", (querySnapshot) => {
    rooms.value=[]
    querySnapshot.forEach((doc) => {
      const room = {
        id: doc.id,
        Name: doc.data().Name,
        Description: doc.data().Description,
        Devices: [], //Se crea un array para almacenar los dispositivos en cada sala
      };

      rooms.value.push(room);
    });
  giveCollection("Devices", (querySnapshot) => {
    resetDevices(rooms.value)
    querySnapshot.forEach((doc) => {
      const device = {
        id: doc.id,
        Name: doc.data().Name,
        Value: doc.data().Value,
        Type: doc.data().Type,
        Room: doc.data().Room,
      };
      rooms.value.forEach((room) => {
        //Se comprueba si la sala tiene el mismo nombre que el nombre de la sala
        //que tiene el dispositivo y se envia la lista donde tiene el mismo
        //nombre de sala que el dispositivo y el dispositivo a añadir
        if (room.Name === device.Room) { 
          room.Devices.push(device)
        }
      });
    });
  });
})}


const resetDevices = (rooms)=>{rooms.forEach((el)=>el.Devices=[])}

//Se cuentan los dispositivos. Se hace un map de la lista rooms y se cogen los dispositivos y se van metiendo en un acumulador para 
//su posterior conteo

const countDevices = computed(() => {
 return rooms.value.map((el)=>el.Devices)
               .reduce((acc,el)=>acc+=el.length,0);

});


</script>
