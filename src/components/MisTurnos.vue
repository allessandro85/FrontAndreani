<template>
  <div>
    <div v-if="SinTurno">
      <q-card class="my-card bg-warning">
        <q-card-section class="text-center">
          <div class="text-h6">No Posee Turnos</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="q-ma-xl" v-else>
      <q-card class="q-mb-xl my-card bg-secondary" v-for="(item, index) in misTurnos" :key="index">
        <q-card-section>
          <div class="text-h6 text-center">{{ item }}</div>
        </q-card-section>

        <q-card-section>
          <div class="text-subtitle2">Dia : </div>
          <div class="text-subtitle2">Horario : {{ item }}</div>
          <div class="text-subtitle2">Especialidad :</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
   name: 'MisTurnos',
   data(){
    return {
      drawer: ref(false),
      SinTurno: false,
      misTurnos: [
      'Neurología', 'Odontología', 'Anestesiología', 'Cirugía de Tórax', 'Pediatría'
      ],
    }
   },
   methods: {
  }
}
</script>
