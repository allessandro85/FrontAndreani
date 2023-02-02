<template>
  <div class="q-ma-xl">
    <q-card class="my-card bg-secondary text-center">
      <q-card-section>
        <div class="text-h6">SolicitarTurnos</div>

      </q-card-section>

      <q-card-section>
        <q-select borderless v-model="especialidades" :options="optionsEspecialidades" label="Especialidades"/>
      </q-card-section>

      <q-separator dark />
      <q-card-section v-if="especialidades">
        <div class="text-h6 q-ma-md">Turnos Disponibles</div>
        <div class="row q-ma-xs">
          <div v-for="(item, index) in turnosDisponibles" :key="index">
            <q-card class="q-ma-md bg-warning">
              <q-btn :label="item" @click="SaveTurno(item)"> </q-btn>
            </q-card>
          </div>
        </div>
      </q-card-section>

      <q-card-section v-if="confirmarTurno">
        <div class="text-h6 q-ma-md">Confirmacion del siguiente turno</div>
          <div class="q-gutter-md items-start">
            <q-btn class="bg-primary" label="Confirmar : " @click="turnoConfirmado(turnoSeleccionado)"> {{ turnoSeleccionado }} </q-btn>
          </div>
      </q-card-section>
    </q-card>
  </div>
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
      optionsEspecialidades: [],
      turnosDisponibles: [
      '2019-02-22 21:02', '2019-02-22 21:02', '2019-02-22 21:02', '2019-02-22 21:02', '2019-02-22 21:02', '2019-02-22 21:02',
      '2019-02-22 21:02', '2019-02-22 21:02', '2019-02-22 21:02','2019-02-22 21:02', '2019-02-22 21:02','2019-02-22 21:02'
      ],
      confirmarTurno: false,
      turnoSeleccionado: null
    }
   },
   mounted(){
    this.GetEspecialidades();
   },
   methods: {
    Submit(){
      let algo = this.hora;
      let algo2 = this.fecha;
      let jskjd = this.especialidades;
    },
    async GetEspecialidades(){
      this.url = "https://localhost:7198/Especialidades/GetAll";

            await axios.get(this.url)
            .then(response =>{
                if(response.data){
                  this.FetchEspecialidades(response.data);
                }
            })
            .catch(error =>{
            })
    },
    FetchEspecialidades(especialidades){
      especialidades.forEach(element => {
        this.optionsEspecialidades.push(element.nombre);
      });
    },
    SaveTurno(item){
      this.turnoSeleccionado = item;
      this.confirmarTurno = true;
    },
    turnoConfirmado(item){
      this.SendNotification("Confirmo el turno", "positive");
    },
    SendNotification(mensaje, color){
        this.$q.notify({
            message: mensaje,
            type: color,
            position: "top",
            group: false,
        });
    },
  }
}
</script>
