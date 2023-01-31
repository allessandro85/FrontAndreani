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
               <div>
                    <div class="q-ma-md col-4">
                        <q-input filled v-model="usuario" label="Usuario" />
                        <q-input filled v-model="contraseña" label="Contraseña" />
                    </div>
                </div>
          </div>
          <div class="row text-center q-mt-xl">
              <div class="col-12">
                  <q-btn color="positive" text-color="white" label="Ingresar" @click="GetData" cleareable></q-btn>
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
           resultado: null,
           usuario: null,
           contraseña: null
       }
   },
   methods: {
        async GetDataApi(){
            // this.url = "https://localhost:7198/Usuario/ValidarUsuario?usuario=" + this.usuario +`&contraseña=`+ this.contraseña +``;
            this.url = "https://localhost:7198/Usuario/ValidarUsuario?usuario=" + this.usuario +``;

            await axios.post(this.url)
            .then(response =>{
                if(response.data){
                  // localStorage.setItem('Token',response.data);
                  // axios.defaults.headers.common['Autorization'] = 'Bearer' + response.data;
                  this.$router.push('/Menu');
                }
            })
            .catch(error =>{
              this.SendNotification("No autorizado", "negative");
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
