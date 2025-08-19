// components/PokemonCard.vue
<template>
    <section id="pokemon-card" class="d-flex flex-column justify-content-center align-items-center">
        <div class="background-pokemon-card p-1 mb-5">

            <div class="container pt-3 pb-3 position-relative d-flex justify-content-center">
                <div class="type-container position-absolute p-2 rounded start-0">
                    <p class="text-start ">{{ pokemon.type }}</p>
                </div>
                <div class="card pokemon-card-container ps-3 pe-3 pt-2 pb-2 shadow position-relative" v-bind:class="pokemon.type === 'fire' ? 'bg-fire' :
                    pokemon.type === 'water' ? 'bg-water' :
                        pokemon.type === 'grass' ? 'bg-grass' :
                            pokemon.type === 'electric' ? 'bg-electric' :
                                pokemon.type === 'ice' ? 'bg-water' :
                                    pokemon.type === 'rock' ? 'bg-dragon' :
                                        pokemon.type === 'poison' ? 'bg-psychic' :
                                            pokemon.type === 'normal' ? 'bg-normal' :
                                                pokemon.type === 'ground' ? 'bg-ground' :
                                                    pokemon.type === 'ghost' ? 'bg-psychic' :
                                                        pokemon.type === 'fighting' ? 'bg-fighting' :
                                                            pokemon.type === 'fairy' ? 'bg-psychic' :
                                                                pokemon.type === 'dragon' ? 'bg-dragon' :
                                                                    pokemon.type === 'dark' ? 'bg-dark' :
                                                                        pokemon.type === 'bug' ? 'bg-grass' :
                                                                            pokemon.type === 'psychic' ? 'bg-psychic' :
                                                                                'bg-default'">
                    <div class="card-header-container d-flex justify-content-evenly pb-2">
                        <h3 class="card-header-h3">{{ capitalize(pokemon.name) }}</h3>

                        <div class="ps-container d-flex align-items-center gap-1">
                            <div class="d-flex align-items-center">
                                <p>ps</p>
                                <h3>{{ pokemon.ps }}</h3>
                            </div>
                            <div>
                                <img v-if="pokemon.type === 'fire'" src="../assets/images/types-icons/fire-type.ico"
                                    alt="Fuego" class="img" />

                                <img v-else-if="pokemon.type === 'water'"
                                    src="../assets/images/types-icons/water-type.ico" alt="Agua" class="img" />

                                <img v-else-if="pokemon.type === 'grass'"
                                    src="../assets/images/types-icons/grass-type.ico" alt="Planta" class="img" />

                                <img v-else-if="pokemon.type === 'electric'"
                                    src="../assets/images/types-icons/electric-type.ico" alt="Eléctrico" class="img" />

                                <img v-else-if="pokemon.type === 'ice'" src="../assets/images/types-icons/ice-type.ico"
                                    alt="Hielo" class="img" />

                                <img v-else-if="pokemon.type === 'rock'"
                                    src="../assets/images/types-icons/rock-type.ico" alt="Roca" class="img" />


                                <img v-else-if="pokemon.type === 'poison'"
                                    src="../assets/images/types-icons/poison-type.ico" alt="Veneno" class="img" />

                                <img v-else-if="pokemon.type === 'normal'"
                                    src="../assets/images/types-icons/normal-type.ico" alt="Normal" class="img" />

                                <img v-else-if="pokemon.type === 'ground'"
                                    src="../assets/images/types-icons/ground-type.ico" alt="Tierra" class="img" />

                                <img v-else-if="pokemon.type === 'ghost'"
                                    src="../assets/images/types-icons/ghost-type.ico" alt="Ghost" class="img" />


                                <img v-else-if="pokemon.type === 'fighting'"
                                    src="../assets/images/types-icons/fighting-type.ico" alt="fighting" class="img" />

                                <img v-else-if="pokemon.type === 'fairy'"
                                    src="../assets/images/types-icons/fairy-type.ico" alt="fairy" class="img" />


                                <img v-else-if="pokemon.type === 'dragon'"
                                    src="../assets/images/types-icons/dragon-type.ico" alt="fairy" class="img" />

                                <img v-else-if="pokemon.type === 'dark'"
                                    src="../assets/images/types-icons/dark-type.ico" alt="dark" class="img" />

                                <img v-else-if="pokemon.type === 'bug'" src="../assets/images/types-icons/bug-type.ico"
                                    alt="bug" class="img" />

                                <img v-else-if="pokemon.type === 'psychic'"
                                    src="../assets/images/types-icons/psychic-type.ico" alt="psychic" class="img" />
                            </div>
                        </div>
                    </div>

                    <div class="pokemon-image-container d-flex justify-content-center position-relative">
                        <img :src="pokemon.image" alt="imagen del pokemon" class="img" />
                        <div class="poke-stats position-absolute  start -50">

                            <p class="m-0 text-center"> Altura {{ pokemon.height }} Peso
                                {{ pokemon.weight }} kg</p>

                        </div>
                    </div>


                    <div class="info-container d-flex flex-column">

                        <!-- podria iterarse -->
                        <div class="power-container d-flex align-items-center mt-5 justify-content-between">
                            <div>
                                <img v-if="pokemon.type === 'fire'" src="../assets/images/types-icons/fire-type.ico"
                                    alt="Fuego" class="img" />

                                <img v-else-if="pokemon.type === 'water'"
                                    src="../assets/images/types-icons/water-type.ico" alt="Agua" class="img" />

                                <img v-else-if="pokemon.type === 'grass'"
                                    src="../assets/images/types-icons/grass-type.ico" alt="Planta" class="img" />

                                <img v-else-if="pokemon.type === 'electric'"
                                    src="../assets/images/types-icons/electric-type.ico" alt="Eléctrico" class="img" />

                                <img v-else-if="pokemon.type === 'ice'" src="../assets/images/types-icons/ice-type.ico"
                                    alt="Hielo" class="img" />

                                <img v-else-if="pokemon.type === 'rock'"
                                    src="../assets/images/types-icons/rock-type.ico" alt="Roca" class="img" />


                                <img v-else-if="pokemon.type === 'poison'"
                                    src="../assets/images/types-icons/poison-type.ico" alt="Veneno" class="img" />

                                <img v-else-if="pokemon.type === 'normal'"
                                    src="../assets/images/types-icons/normal-type.ico" alt="Normal" class="img" />

                                <img v-else-if="pokemon.type === 'ground'"
                                    src="../assets/images/types-icons/ground-type.ico" alt="Tierra" class="img" />

                                <img v-else-if="pokemon.type === 'ghost'"
                                    src="../assets/images/types-icons/ghost-type.ico" alt="Ghost" class="img" />


                                <img v-else-if="pokemon.type === 'fighting'"
                                    src="../assets/images/types-icons/fighting-type.ico" alt="fighting" class="img" />

                                <img v-else-if="pokemon.type === 'fairy'"
                                    src="../assets/images/types-icons/fairy-type.ico" alt="fairy" class="img" />


                                <img v-else-if="pokemon.type === 'dragon'"
                                    src="../assets/images/types-icons/dragon-type.ico" alt="fairy" class="img" />

                                <img v-else-if="pokemon.type === 'dark'"
                                    src="../assets/images/types-icons/dark-type.ico" alt="dark" class="img" />

                                <img v-else-if="pokemon.type === 'bug'" src="../assets/images/types-icons/bug-type.ico"
                                    alt="bug" class="img" />


                                <img v-else-if="pokemon.type === 'psychic'"
                                    src="../assets/images/types-icons/psychic-type.ico" alt="psychic" class="img" />

                            </div>
                            <h3>{{ capitalize(pokemon.power) }}</h3>
                            <span>{{ pokemon.level }}</span>
                        </div>
                        <div class="power-description-container">
                            <p>{{ capitalize(pokemon.especialPowerDescription) }}</p>
                        </div>


                    </div>

                    <div class="pokemon-description-container">
                        <p class="text-center">{{ capitalize(pokemon.description) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        pokemon: {
            type: Object,
            required: true
        }
    },
    methods: {
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    },
}
</script>


<style scoped>
.pokemon-card-container {
    max-width: 490px;
    border-radius: 20px;
    background: url(../assets/images/cards-backgrounds/psique-light.png)
}


.background-pokemon-card {
    content: "";
    height: 107%;
    max-width: 526px;
    background: #9c9c9c;
    background: linear-gradient(180deg, rgba(156, 156, 156, 1) 0%, rgba(230, 230, 230, 1) 100%);
    display: block;
    filter: drop-shadow(5px 5px 10px #000000);
    z-index: -1;
    border-radius: 30px;
}


.pokemon-image-container img {
    max-width: 95%;
    max-height: 400px;
    border-radius: 3px;
}

.pokemon-image-container::before {
    content: "";
    width: 97%;
    height: 102%;
    top: -6px;
    z-index: -1;
    display: block;
    position: absolute;
    background: linear-gradient(82deg, rgba(255, 252, 252, 1) 0%, rgba(166, 166, 166, 1) 54%, rgba(156, 156, 156, 1) 100%);
    border-radius: 3px;

}

.card-header-container {
    gap: 57px;
}

.card-header-h3 {
    margin-left: 70px;
    min-width: 197px;
}




.type-container {
    background: url(../assets/images/type-div.svg);
    background-repeat: no-repeat;
    min-width: 111px;
    filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.404));
    z-index: 2;
}

.type-container p {
    font-size: 24px !important;
    margin: -5px 0px 0px -2px;
    font-weight: 700;
    font-style: italic;
}

.ps-container img {
    display: block;
    width: 53px;
}

.poke-stats {
    background: url(../assets/images/pokemon-div.svg);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 5px 31px 6px 31px;
    color: black;
    top: 95%;
    width: 100%;
    background-position-y: -2px;
    height: 34px;
}

.poke-stats p {
    font-size: 0.6rem;
}

.power-container {}

.power-container img {
    width: 30px;
}

.info-container {
    min-height: 250px;
}

.pokemon-description-container::before {
    content: "";
    display: block;
    border: 1px solid black;
    width: 100%;
    margin-bottom: 20px;
}


/* bg tipes------------------------- */
.bg-fire {
    background: url('../assets/images/cards-backgrounds/fire-light.png');
}

.bg-water {
    background: url('../assets/images/cards-backgrounds/water-light.png');
}

.bg-grass {
    background: url('../assets/images/cards-backgrounds/grass-light.png');
}

.bg-electric {
    background: url('../assets/images/cards-backgrounds/electric-light.png');
}

.bg-ice {
    background: url('../assets/images/cards-backgrounds/water-light.png');
}

.bg-rock {
    background: url('../assets/images/cards-backgrounds/dragon-light.png');
}

.bg-poison {
    background: url('../assets/images/cards-backgrounds/psique-light.png');
}

.bg-ground {
    background: url('../assets/images/cards-backgrounds/ground-light.png');
}

.bg-ghost {
    background: url('../assets/images/cards-backgrounds/psique-light.png');
}

.bg-fighting {
    background: url('../assets/images/cards-backgrounds/fight-light.png');
}

.bg-fairy {
    background: url('../assets/images/cards-backgrounds/psique-light.png');
}

.bg-dragon {
    background: url('../assets/images/cards-backgrounds/dragon-light.png');
}

.bg-dark {
    background: url('../assets/images/cards-backgrounds/dark-light.png');
    color: white;
}

.bg-bug {
    background: url('../assets/images/cards-backgrounds/grass-light.png');
}

.bg-psychic {
    background: url('../assets/images/cards-backgrounds/psique-light.png');
}

@media (max-width: 575.98px) {
    .hero-title {
        width: 100% !important;
    }

    .hero {
        position: relative;
        background-image: url(stain-movile.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .background-pokemon-card {
        max-width: 300px;
        padding: 0;
    }


    .type-container {
        left: 14px !important;
        min-width: 78px;
    }

    .type-container p {
        font-size: 17px !important;
    }

    .card-header-container {
        gap: 0;
    }

    .card-header-h3 {
        margin-left: 45px;
        min-width: 105px;
        font-size: 23px;
    }

    .ps-container h3 {
        font-size: 22px;
    }

    .ps-container p {
        font-size: 16px;
    }

    .ps-container img {
        width: 40px;
    }

    .info-container {
        min-height: 190px;
    }

    .poke-stats {
        padding: 5px 0px 6px 0px;
    }

}
</style>