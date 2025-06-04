<template>
  <section class="mt-48 mb-32">

    <!-- Mostrar el formulario si no fue enviado -->
    <div class="container mt-48">

      <div v-if="!isSubmitted">
        <h1 class="text-center mt-48 pt-5">Conviertete en creador, diseñá tu carta única</h1>
        <pokemon-form @submit-pokemon="handlePokemonCreated" />
      </div>

      <!-- Mostrar la carta si el formulario fue enviado -->
      <div v-else
        class=" d-flex flex-column justify-content-center align-items-center animate__animated animate__flipInY">
        <h1 class="text-center pt-5">¡Experimento exitoso! Tu carta está lista.</h1>
        <div>
          <a class="d-flex justify-content-end mt-32 mb-24 ora-text">
            <RouterLink to="/history" class="ora-text">Ver historial</RouterLink>
            <img src="../assets/images/arrow_right.svg" alt="flecha hacia la izquierda">
          </a>
          <pokemon-card :pokemon="createdPokemon" />
        </div>
        <div class="col-12 col-md-6">
          <button @click="reloadPage" class="btn btn-custom w-100 mb-3">Hacer otro experimento</button>
        </div>
        <RouterLink to="/" class="text-init">Volver al inicio</RouterLink>
      </div>
    </div>

  </section>
</template>

<script>
import PokemonForm from '@/components/CardForm.vue'
import PokemonCard from '@/components/pokemonCard.vue'

export default {
  name: 'CreateView',
  components: {
    PokemonForm,
    PokemonCard
  },
  data() {
    return {
      isSubmitted: false,
      createdPokemon: null
    }
  },
  methods: {
    handlePokemonCreated(pokemon) {
      this.createdPokemon = pokemon
      this.isSubmitted = true
    },
    reloadPage() {
      this.$router.go(0);
    }
  }
}
</script>
<style scoped>
section {
  background-image: url(../assets/images/dots.png);
}

.text-init {
  font-size: 1rem;
  font-weight: 100;
}
</style>
