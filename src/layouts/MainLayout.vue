<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row">
      <div class="col-2">

      </div>
      <div class="col-8">
        <Generic ref="generic"></Generic>
      </div>
    </div>
  </q-layout>
</template>

<script>
import Generic from 'components/Generic.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    Generic
  },
  mounted(){
    // var token = localStorage.getItem('Token');
    // debugger;
    // if(!token || token == null){
    //   this.$router.push('/');
    // }
  },
  data () {
    return {

    }
  },
  methods:{
  }
})
</script>
