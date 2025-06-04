<template>
  <section id="form-container" class="section-form py-5">
    <div class="container text-container">
      <h2 class="text-center">Ingresa los Datos de tu nueva carta personalizada</h2>
    </div>
    <form class="container py-4" @submit="handleSubmit">
      <div class="row g-3">
        <!-- Nombre -->
        <div class="col-md-6">
          <label class="form-label">Nombre del Pokémon</label>
          <input v-model="pokemonName" type="text" class="form-control" required />
        </div>

        <!-- Tipo -->
        <div class="col-md-6">
          <label for="pokemon-type" class="form-label">Tipo favorito</label>
          <select class="form-select" id="pokemon-type" v-model="type">
            <option disabled value="">Selecciona un tipo</option>
            <option value="fire">🔥 Fuego</option>
            <option value="water">💧 Agua</option>
            <option value="grass">🌿 Planta</option>
            <option value="electric">⚡ Eléctrico</option>
            <option value="ice">❄️ Hielo</option>
            <option value="rock">🪨 Roca</option>
            <option value="poison">☠️ Veneno</option>
            <option value="normal">🔘 Normal</option>
            <option value="ground">🌍 Tierra</option>
            <option value="ghost">👻 Fantasma</option>
            <option value="fighting">🥊 Lucha</option>
            <option value="fairy">🧚 Hada</option>
            <option value="dragon">🐉 Dragón</option>
            <option value="dark">🌑 Siniestro</option>
            <option value="bug">🐛 Bicho</option>
            <option value="psychic">🔮 Psíquico</option>
          </select>
        </div>

        <!-- Poder especial -->
        <div class="col-md-6">
          <label class="form-label">Título Poder especial</label>
          <input v-model="especialPower" type="text" maxlength="25" class="form-control" />
        </div>

        <div class="col-md-6">
          <label class="form-label">Descripción Poder especial</label>
          <input v-model="especialPowerDescription" type="text" maxlength="60" class="form-control" />
        </div>

        <!-- Nivel de poder -->
        <div class="col-md-6">
          <label class="form-label">Nivel de poder</label>
          <input v-model="powerLevel" type="number" class="form-control" />
        </div>

        <!-- PS -->
        <div class="col-md-6">
          <label class="form-label">PS (máximo 200)</label>
          <input v-model="ps" type="number" class="form-control" max="200" required />
        </div>

        <!-- Descripción -->
        <div class="col-md-12">
          <label class="form-label">Descripción del Pokémon</label>
          <textarea v-model="description" class="form-control" maxlength="100" rows="3"></textarea>
        </div>

        <!-- Altura y Peso -->
        <div class="col-md-6">
          <label class="form-label">Altura (ej. 1.8)</label>
          <input v-model="height" type="number" step="0.1" class="form-control" />
        </div>

        <div class="col-md-6">
          <label class="form-label">Peso (ej. 85.5)</label>
          <input v-model="weight" type="number" step="0.1" class="form-control" />
        </div>

        <!-- Imagen -->
        <div class="col-md-12">
          <label class="form-label">Imagen del Pokémon</label>
          <input type="file" @change="onImageSelected" class="form-control" />
        </div>

        <!-- Botón -->
        <div class="col-md-12 text-end mt-4">
          <button type="submit" class="btn btn-custom w-100">Crear Pokémon</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'CardForm',
  data() {
    return {
      pokemonName: '',
      type: '',
      especialPower: '',
      especialPowerDescription: '',
      powerLevel: 50,
      legendary: false,
      shiny: false,
      pokemonImage: null,
      description: '',
      height: 0,
      weight: 0,
      ps: 0
    };
  },
  methods: {
    onImageSelected(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.pokemonImage = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleSubmit(e) {
      e.preventDefault();
      const newPokemon = {
        name: this.pokemonName,
        type: this.type,
        power: this.especialPower,
        level: this.powerLevel,
        ps: this.ps,
        legendary: this.legendary,
        shiny: this.shiny,
        image: this.pokemonImage,
        height: this.height,
        weight: this.weight,
        description: this.description,
        especialPowerDescription: this.especialPowerDescription
      };

      const stored = JSON.parse(localStorage.getItem('pokemons')) || [];

      if (stored.length >= 3) {
        stored.shift();
      }

      stored.push(newPokemon);
      localStorage.setItem('pokemons', JSON.stringify(stored));
      this.$emit('submit-pokemon', newPokemon);

      // Limpiar campos
      this.pokemonName = '';
      this.type = '';
      this.especialPower = '';
      this.especialPowerDescription = '';
      this.powerLevel = 50;
      this.legendary = false;
      this.shiny = false;
      this.pokemonImage = null;
      this.description = '';
      this.height = 0;
      this.weight = 0;
      this.ps = 0;
    }
  }
};
</script>

<style scoped>
/* Si tenés estilos específicos los podés poner acá */
</style>
