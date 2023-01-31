<template>
  <q-page padding >
    <q-card class="my-card bg-warning" v-if="SinNotificaciones">
      <q-card-section class="text-center">
        <div class="text-h6">No Posee Notificaciones</div>
      </q-card-section>

    </q-card>
    <q-card class="my-card bg-secondary" v-else>
      <q-card-section>
        <div class="text-h6 text-center">Notificacion</div>
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle2"> estas serian las notificaciones </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
   name: 'Notificaciones',
   data(){
    return {
      drawer: ref(false),
      SinNotificaciones : false
    }
   },
   methods: {
  }
}
</script>
