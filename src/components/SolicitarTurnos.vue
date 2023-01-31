<template>
  <q-page padding >
    <q-card class="my-card bg-secondary text-center">
      <q-card-section>
        <div class="text-h6">SolicitarTurnos</div>

      </q-card-section>

      <q-card-section>
        <q-select borderless v-model="especialidades" :options="optionsEspecialidades" label="Especialidades"/>
      </q-card-section>

      <q-separator dark />
      <q-card-section v-if="especialidades">
        <div class="q-pa-md">
          <div class="q-gutter-md row items-start">
            <q-date v-model="fecha" mask="YYYY-MM-DD HH:mm" color="purple" />
            <q-time v-model="hora" mask="YYYY-MM-DD HH:mm" color="purple" />
            <q-btn v-model="submit" label="SolicitarTurno" type="submit" color="primary" @click="Submit()"/>
          </div>



        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
   name: 'SolicitarTurnos',
   data(){
    return {
      model: null,
      submit: null,
      habilitarFechaHora: false,
      fecha: null,
      hora: null,
      fechaHora: ref('2019-02-22 21:02'),
      especialidades: null,
      optionsEspecialidades: [
        'Neurología', 'Odontología', 'Anestesiología', 'Cirugía de Tórax', 'Pediatría'
      ]
    }
   },
   methods: {
    Submit(){
      let algo = this.hora;
      let algo2 = this.fecha;
      let jskjd = this.especialidades;
      debugger;
    }
  }
}
</script>
