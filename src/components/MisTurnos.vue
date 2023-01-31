<template>
  <q-page padding >
    <q-card class="my-card bg-warning" v-if="SinTurno">
      <q-card-section class="text-center">
        <div class="text-h6">No Posee Turnos</div>
      </q-card-section>

    </q-card>
    <q-card class="my-card bg-secondary" v-else>
      <q-card-section>
        <div class="text-h6 text-center">Turno</div>
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle2">Dia : </div>
        <div class="text-subtitle2">Horario : </div>
        <div class="text-subtitle2">Especialidad :</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
   name: 'MisTurnos',
   data(){
    return {
      drawer: ref(false),
      SinTurno: true
    }
   },
   methods: {
  }
}
</script>
