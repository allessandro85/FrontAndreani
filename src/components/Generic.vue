<template>
    <div>
        <q-card class="q-pa-md">
            <div class="col-12">
                <q-card-section class="bg-teal text-white">
                    <div class="text-h4 text-center"> Desafío Técnico </div>
                    <div class="text-h3 text-center"> Alejandro Piñero </div>
                    <div class="text-h4 text-center"> Sistema de Turnos </div>
                </q-card-section>
            </div>
            <div class="q-pa-md" style="color: rgb(165, 139, 139);">
              <!-- <div class="row text-center q-mt-xl" v-if="fieldTypeNumber">
                   <div class="col-4">
                       <q-input filled v-model="numerador" label="Usuario" />
                   </div>

                   <div class="col-4">
                       <q-input filled v-model="denominador" label="Contraseña" />
                   </div>
               </div> -->
               <div>
                    <div class="q-ma-md col-4">
                        <q-input filled v-model="usuario" label="Usuario" />
                        <q-input filled v-model="contraseña" label="Contraseña" />
                    </div>
                </div>
          </div>

          <!-- <div class="col-12">
               <div class="row">
                   <div class="col-4"></div>
                   <div class="col-4">
                       <q-input filled label="Resultado" readonly v-model="resultado" />
                   </div>
                   <div class="col-4"> </div>
               </div>
           </div> -->

           <!-- <div class="row text-center">
            <div class="col-12 text-h6 q-mb-md q-mt-md">
                {{texto}}
            </div>
           </div> -->

          <div class="col-12 text-center q-mt-xl">
               <div class="row">
                   <div class="col-4">
                       <q-btn color="positive" text-color="white" label="Ingresar" @click="GetData" cleareable></q-btn>
                   </div>
                   <div class="col-4">
                       <q-btn color="info" text-color="white" label="Registrarse" cleareable></q-btn>
                   </div>
               </div>
           </div>
        </q-card>
   </div>
</template>

<script>
import axios from 'axios'

export default {
   name: 'Generic',
   data(){
       return{
          //  numerador: null,
          //  denominador: null,
          //  resultado: null,
           usuario: null,
           contraseña: null,
           error: true,
          //  url: null
       }
   },
   methods: {
        async GetDataApi(){
            this.error = false;
            this.url = "https://localhost:7041/Usuario/Login?usuario=" + this.usuario +`&contraseña=`+ this.contraseña +``;

            await axios.get(this.url)
            .then(done =>{
                this.resultado = done.data;
            })
        },
       GetData(){
          if(this.usuario != null && this.contraseña != null){
              this.GetDataApi();
          }else{
            this.SendNotification("Debe ingresar parametros", "negative");
          }
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
