<template>
  <div>
    <div class="q-ma-xl" v-if="SinNotificaciones">
      <q-card class="my-card bg-warning">
        <q-card-section class="text-center">
          <div class="text-h6">No Posee Notificaciones</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="q-ma-xl" v-else>
      <q-card class="q-mb-xl my-card bg-warning" v-for="(item, index) in notificacionesDisponibles" :key="index">
        <q-card-section>
          <div class="text-h6 text-center">{{ item }}</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
   name: 'Notificaciones',
   data(){
    return {
      drawer: ref(false),
      SinNotificaciones : false,
      notificacionesDisponibles: [
      'Notificacion1', 'Notificacion1', 'Notificacion1', 'Notificacion1', 'Notificacion1', 'Notificacion1',
      'Notificacion1', 'Notificacion1', 'Notificacion1','Notificacion1', 'Notificacion1','Notificacion1'
      ],
    }
   },
   methods: {
  }
}
</script>
