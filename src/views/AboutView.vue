<script setup>

</script>

<template>

  <section>
    <h1>Acerca de TCG</h1>
    <h2>¿Cómo se juega?</h2>
    <p>
      Dos jugadores se enfrentan con mazos de 60 cartas. Cada uno elige un Pokémon activo, prepara su banca y coloca 6
      cartas de premio. En su turno, pueden robar, jugar Pokémon, usar Energías, Entrenadores, evolucionar y atacar.
      Gana quien tome las 6 cartas de premio, deje al rival sin Pokémon o impida que robe. Estrategia, azar y
      planificación hacen que cada partida sea única.
    </p>
    <img class="img-fluid" src="../assets/images/about_1.png" alt="personas jugado tcg">
  </section>

  <section class="position-relative target-section">
    <div class="wave-top"></div>

    <div class="bg-ora position-relative container d-flex flex-column align-items-center">
      <h2 class="mt-48">Partes de una carta de Pokémon</h2>
      <p class="mt-32 text-center">
        Cada carta de Pokémon tiene varios elementos visuales y funcionales importantes:
      </p>
      <div class="d-flex">

        <div>
          <div>
            <img src="../assets/images/path-hp-type.png" alt="">
            <div class="position-relativa">
              <img  class="position-absolute end-0" src="../assets/images/spinning-gear-yellow.png" alt="">
              <img class="position-absolute end-0" src="../assets/images/type-in-card.png" alt="">
            </div>
          </div>
          <div>
            <img src="../assets/images/chevron-left.svg" alt="flecha">
            <img class="img mt-32" src="../assets/images/card-example-movile.png" alt="pikachu con una carta">
            <img src="" alt="">
            <img src="../assets/images/chevron-right.svg" alt="flecha">
          </div>
        </div>
      </div>

      <div class="mt-32">
        <h2 class="">
          Tipo del Pokémon y PS
        </h2>
        <p class="mt-2">
          Indica el tipo del Pokémon y cuánto daño puede recibir antes de quedar Fuera de Combate. Cada Pokémon tiene su
          propia Debilidad y Resistencia, recogidas en la parte inferior de la carta. Recuerda esto cuando te prepares
          para tu próximo combate.
        </p>
      </div>
    </div>
    <div class="wave-bottom"></div>

  </section>

</template>

<style></style>
