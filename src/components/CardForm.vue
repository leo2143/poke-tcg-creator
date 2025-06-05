<template>
  <section id="form-container" class="section-form py-5">
    <div class="container text-container">
      <h2 class="text-center">Ingresa los Datos de tu nueva carta personalizada</h2>
    </div>
    <form class="container py-4" @submit="handleSubmit">
      <div class="row g-3">

        <div class="col-md-6">
          <label class="form-label">Nombre del Pokémon</label>
          <input v-model="pokemonName" type="text" class="form-control" required />
        </div>

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

        <div class="col-md-6">
          <label class="form-label">Título Poder especial</label>
          <input v-model="especialPower" type="text" maxlength="25" class="form-control" />
          <p v-if="errors.especialPower" class="text-danger">{{ errors.especialPower }}</p>
        </div>

        <div class="col-md-6">
          <label class="form-label">Descripción Poder especial</label>
          <input v-model="especialPowerDescription" type="text" maxlength="60" class="form-control" />
          <p v-if="errors.especialPowerDescription" class="text-danger">{{ errors.especialPowerDescription }}</p>
        </div>

        <div class="col-md-6">
          <label class="form-label">Nivel de poder</label>
          <input v-model="powerLevel" type="number" class="form-control" />
        </div>

        <div class="col-md-6">
          <label class="form-label">PS (máximo 500)</label>
          <input v-model="ps" type="number" class="form-control" />
          <p v-if="errors.ps" class="text-danger">{{ errors.ps }}</p>
        </div>

        <div class="col-md-12">
          <label class="form-label">Descripción del Pokémon</label>
          <textarea v-model="description" class="form-control" maxlength="100" rows="3"></textarea>
          <p v-if="errors.description" class="text-danger">{{ errors.description }}</p>
        </div>

        <div class="col-md-6">
          <label class="form-label">Altura (ej. 1.8)</label>
          <input v-model="height" type="number" step="0.1" class="form-control" />
          <p v-if="errors.height" class="text-danger">{{ errors.height }}</p>
        </div>

        <div class="col-md-6">
          <label class="form-label">Peso (ej. 85.5)</label>
          <input v-model="weight" type="number" step="0.1" class="form-control" />
          <p v-if="errors.weight" class="text-danger">{{ errors.weight }}</p>
        </div>

        <div class="col-md-12">
          <label class="form-label">Imagen del Pokémon</label>
          <input type="file" @change="onImageSelected" class="form-control" />
          <p v-if="errors.pokemonImage" class="text-danger">{{ errors.pokemonImage }}</p>
        </div>


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
      id: null,
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
      ps: 0,
      errors: {}
    };
  },
  props: {
    pokemonToEdit: {
      type: Object,
      default: null
    }
  },
  watch: {
    pokemonToEdit: {
      handler(newVal) {
        if (newVal) {
          this.id = newVal.id ?? null;
          this.pokemonName = newVal.name;
          this.type = newVal.type;
          this.especialPower = newVal.power;
          this.especialPowerDescription = newVal.especialPowerDescription;
          this.powerLevel = newVal.level;
          this.legendary = newVal.legendary;
          this.shiny = newVal.shiny;
          this.pokemonImage = newVal.image;
          this.description = newVal.description;
          this.height = newVal.height;
          this.weight = newVal.weight;
          this.ps = newVal.ps;
        }
      },
      immediate: true // para que también se ejecute si ya está seteado al montar
    }
  },

  methods: {
    validarFormulario() {
      this.errors = {};

      if (!this.pokemonName || this.pokemonName.length < 3) {
        this.errors.pokemonName = 'El nombre debe tener al menos 3 caracteres.';
      }

      if (!this.type) {
        this.errors.type = 'Debés seleccionar un tipo.';
      }

      if (!this.especialPower) {
        this.errors.especialPower = 'El poder especial es obligatorio.';
      }

      if (!this.especialPowerDescription || this.especialPowerDescription.length < 10) {
        this.errors.especialPowerDescription = 'La descripción del poder especial debe tener al menos 10 caracteres.';
      }

      if (!this.description || this.description.length < 10) {
        this.errors.description = 'La descripción debe tener al menos 10 caracteres.';
      }

      if (!this.weight || this.weight <= 0) {
        this.errors.weight = 'El peso debe ser mayor a 0.';
      }

      if (!this.height || this.height <= 0) {
        this.errors.height = 'La altura debe ser mayor a 0.';
      }

      if (!this.ps || this.ps <= 0 || this.ps > 500) {
        this.errors.ps = 'Los PS deben estar entre 1 y 500.';
      }

      if (!this.pokemonImage) {
        this.errors.pokemonImage = 'Debés seleccionar una imagen.';
      }

      return Object.keys(this.errors).length === 0;
    },

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
      if (!this.validarFormulario()) return;

      const stored = JSON.parse(localStorage.getItem('pokemons')) || [];

      let newPokemon = {
        id: this.pokemonToEdit?.id ?? null,
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

      if (this.pokemonToEdit) {
        const index = stored.findIndex(p => p.id === this.pokemonToEdit.id);
        if (index !== -1) {
          stored[index] = newPokemon;
        }
      } else {
        let lastId = parseInt(localStorage.getItem('lastPokemonId')) || 0;
        newPokemon.id = lastId + 1;
        localStorage.setItem('lastPokemonId', newPokemon.id);

        if (stored.length >= 3) stored.shift();
        stored.push(newPokemon);
      }

      localStorage.setItem('pokemons', JSON.stringify(stored));
      this.$emit('submit-pokemon', newPokemon);

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

<style scoped></style>
