<script>
export default {
  name: 'home'
}
</script>

<template>
  <section class="position-relative">
    <div class="container d-flex flex-column align-items-center">
      <h1 class="mt-48">¿Qué es Pokémon TCG?</h1>
      <p class="mt-32">
        Pokémon TCG (Trading Card Game) es un juego de cartas coleccionables basado en la popular franquicia de Pokémon.
        Fue lanzado por primera vez en 1996 y permite a los jugadores asumir el rol de entrenadores Pokémon,
        construyendo
        mazos personalizados con cartas de criaturas, energías y entrenadores para enfrentarse entre sí. Además del
        aspecto competitivo, Pokémon TCG también es un pasatiempo coleccionable, con miles de cartas que varían en
        rareza,
        ilustración y valor.
      </p>
      <img class="mt-32" src="../assets/images/about_0.png" alt="pokemon de carta tcg">
      <div class="mt-32">
        <RouterLink to="/about">Mas info</RouterLink>
        <img src="../assets/images/arrow_right.svg" alt="flecha">
      </div>
    </div>
  </section>

  <section class="position-relative target-section">
    <div class="wave-top"></div>

    <div class="bg-ora position-relative container d-flex flex-column align-items-center">
      <h1 class="mt-48">Nuestro laboratorio TCG</h1>
      <p class="mt-32">
        Elige tu tipo, tu poder, tu destino. Crea una carta única, como tu alma. Completa nuestro formulario y diseña tu
        propia carta Pokémon TCG: elige el tipo, los ataques, el diseño y hasta la imagen que hará de tu carta algo
        verdaderamente legendario
      </p>
      <img class="mt-32" src="../assets/images/pikachu-card-movile_0.png" alt="pikachu con una carta">
      <div class="mt-32">
        <RouterLink to="/about">Mas info</RouterLink>
        <img src="../assets/images/arrow_right.svg" alt="flecha">
      </div>
    </div>
    <div class="wave-bottom"></div>

  </section>

  <section>
    <div class="container d-flex flex-column align-items-center">
      <h1 class="mt-48">Tus últimas creaciones</h1>
      <p class="mt-32">
        Guardamos tus últimas 3 cartas personalizadas para que puedas verlas y inspirarte nuevamente.
      </p>
      <img class="mt-32" src="../assets/images/history_cards.png" alt="pikachu con una carta">
      <div class="mt-32">
        <RouterLink to="/about">Mas info</RouterLink>
        <img src="../assets/images/arrow_right.svg" alt="flecha">
      </div>
    </div>
  </section>


</template>

<style scoped></style>
