<template>
  <section class="history-container container-fluid py-5 d-flex flex-column justify-content-center align-items-center">
    <div class="text-container mb-32">
      <h1 class=" text-center">Historial de creaciones</h1>
    </div>
    <div class="row">
      <div class="col-xl-4 animate__animated animate__flipInY" v-for="(poke, index) in recentPokemons" :key="index">
        <pokemon-card :pokemon="poke" />
      </div>

      <RouterLink to="/create-card" class="btn btn-custom w-100 ">Hacer otro experimento</RouterLink>

    </div>
  </section>
</template>

<script>
import PokemonCard from '@/components/pokemonCard.vue'

export default {
  name: 'History',
  components: {
    PokemonCard
  },
  data() {
    return {
      recentPokemons: []
    }
  },
  mounted() {
    const stored = localStorage.getItem('pokemons')
    if (stored) {
      const parsed = JSON.parse(stored)
      this.recentPokemons = parsed.slice(-3).reverse()
    }
  }
}
</script>
<style scoped></style>
