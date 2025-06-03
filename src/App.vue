<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';



export default {
  name: "app",
  components: {
    Navbar
  },

  data() {
    return {}
  }
}
</script>


<template>
  <header class="mt-5">
    <Navbar />
  </header>
  <RouterView />
</template>

<style scoped></style>
