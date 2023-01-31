<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff" container style="height: 1000px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <q-toolbar-title class="text-center">Sistema de turnos</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple @click="SetOption('MisTurnos')">
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Mis Turnos
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple  @click="SetOption('SolicitarTurnos')">
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Solicitar Turno
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple  @click="SetOption('Notificaciones')">
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Notificaciones
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Logout
              </q-item-section>

            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <mis-turnos v-if="selectOption == 'MisTurnos'"></mis-turnos>
        <solicitar-turnos v-if="selectOption == 'SolicitarTurnos'"></solicitar-turnos>
        <notificaciones v-if="selectOption == 'Notificaciones'"></notificaciones>
        <!-- <q-page padding v-if="false">
          <q-card class="my-card bg-secondary text-white">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section>
            {{ lorem }}
          </q-card-section>

          <q-separator dark />

          <q-card-actions>
            <q-btn flat>Action 1</q-btn>
            <q-btn flat>Action 2</q-btn>
          </q-card-actions>
        </q-card>
        </q-page>

        <q-page padding v-else>
          <q-card class="my-card bg-secondary text-white">
          <q-card-section>
            <div class="text-h6">Our Changing Planet2</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section>
            {{ lorem }}
          </q-card-section>

          <q-separator dark />

          <q-card-actions>
            <q-btn flat>Action 1</q-btn>
            <q-btn flat>Action 2</q-btn>
          </q-card-actions>
        </q-card>
        </q-page> -->

      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import axios from 'axios'
import MisTurnos from 'components/MisTurnos.vue'
import SolicitarTurnos from 'components/SolicitarTurnos.vue'
import Notificaciones from 'components/Notificaciones.vue'
import { ref } from 'vue'

export default {
   name: 'Menu',
   components : {MisTurnos,SolicitarTurnos,Notificaciones},
   data(){
    return {
      drawer: ref(false),
      selectOption: null
    }
   },
   methods: {
    SetOption(algo){
      this.selectOption = algo;
    }
  }
}
</script>
