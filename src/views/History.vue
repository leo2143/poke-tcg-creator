<template>
  <section class="history-container container-fluid py-5 d-flex flex-column justify-content-center align-items-center">
    <div class="text-container mb-32">
      <h1 class=" text-center">Historial de creaciones</h1>
    </div>
    <div class="row">
      <div class="col-xl-4 animate__animated animate__flipInY" v-for="(poke, index) in recentPokemons" :key="poke.id">
        <div class="position-relative">
          <button class="btn btn-sm btn-danger position-absolute top-0 end-0 z-3 "
            @click="deletePokemon(index)">X</button>
          <button class="btn btn-primary position-absolute top-0 start-0 z-3" @click="editPokemon(poke)">Editar</button>
          <pokemon-card :pokemon="poke" />
        </div>
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
  methods: {
    deletePokemon(index) {
      const stored = JSON.parse(localStorage.getItem('pokemons')) || [];
      const reversedStored = stored.slice(-3).reverse();
      const pokeToDelete = reversedStored[index];
      const updated = stored.filter(p => p.name !== pokeToDelete.name || p.image !== pokeToDelete.image);
      localStorage.setItem('pokemons', JSON.stringify(updated));
      this.recentPokemons = updated.slice(-3).reverse();
    },
    editPokemon(pokemon) {

      this.$router.push({
        name: 'create-card',
        query: { id: pokemon.id }
      });
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
