<template>
  <v-container id="app">
    <Pokedex/>
  </v-container>
</template>

<script>
import Pokedex from './components/Pokedex.vue'

export default {
  name: 'App',
  components: {
    Pokedex
  }
}
</script>
