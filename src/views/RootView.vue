<script>

export default {
  name: "rootView",
}

</script>

<template>
  <main>
    <section id="hero" class="hero container full-height d-flex flex-column justify-content-center align-items-center">
      <h1 class="secondary-text animate__animated animate__zoomInDown">El laboratorio del Profesor Stein</h1>
      <h2>aprende todo sobre cartas TCG y crea la tuya con nuestro formulario.</h2>
      <div class="d-flex flex-column align-items-center justify-content-center">
        <a href="#que-es">Comenzar viaje</a>
        <img src="../assets/images/arrow_down.svg" alt="flecha hacia abajo">
      </div>
    </section>

    <section class="position-relative" id="que-es">
      <div class="container d-flex flex-column align-items-center">
        <h1 class="mt-48">¿Qué es Pokémon TCG?</h1>
        <p class="mt-32">
          Pokémon TCG (Trading Card Game) es un juego de cartas coleccionables basado en la popular franquicia de
          Pokémon.
          Fue lanzado por primera vez en 1996 y permite a los jugadores asumir el rol de entrenadores Pokémon,
          construyendo
          mazos personalizados con cartas de criaturas, energías y entrenadores para enfrentarse entre sí. Además del
          aspecto competitivo, Pokémon TCG también es un pasatiempo coleccionable, con miles de cartas que varían en
          rareza,
          ilustración y valor.
        </p>
        <img class="mt-32 img-fluid d-none d-lg-block" src="../assets/images/about_desktop.png"
          alt="pokemon de carta tcg">
        <img class="mt-32 img-fluid d-lg-none" src="../assets/images/about_0.png" alt="pokemon de carta tcg">
      </div>
    </section>

    <section class="position-relative target-section">
      <div class="wave-top"></div>

      <div class="bg-ora position-relative container d-flex flex-column align-items-center">
        <h1 class="mt-48">Nuestro laboratorio TCG</h1>

        <div class="d-lg-none d-flex flex-column align-items-center">
          <p class="mt-32">
            Elige tu tipo, tu poder, tu destino. Crea una carta única, como tu alma. Completa nuestro formulario y
            diseña
            tu
            propia carta Pokémon TCG: elige el tipo, los ataques, el diseño y hasta la imagen que hará de tu carta algo
            verdaderamente legendario
          </p>
          <img class="mt-32 img-fluid" src="../assets/images/pikachu-card-movile_0.png" alt="pikachu con una carta">
          <div class="mt-32">
            <RouterLink to="/create-card">Crear Nueva carta</RouterLink>
            <img src="../assets/images/arrow_right_yellow.svg" alt="flecha">
          </div>
        </div>

        <div class="d-none d-lg-flex align-items-center">
          <div>
            <p class="mt-32">
              Elige tu tipo, tu poder, tu destino. Crea una carta única, como tu alma. Completa nuestro formulario y
              diseña
              tu
              propia carta Pokémon TCG: elige el tipo, los ataques, el diseño y hasta la imagen que hará de tu carta
              algo
              verdaderamente legendario
            </p>
            <div class="mt-32">
              <RouterLink to="/create-card">Crear Nueva carta</RouterLink>
              <img src="../assets/images/arrow_right_yellow.svg" class="img-fluid" alt="flecha">
            </div>
          </div>

          <img class="mt-32 img-fluid" src="../assets/images/pikachu-card-desktop.png" alt="pikachu con una carta">

        </div>
      </div>

      <div class="wave-bottom"></div>

    </section>

    <section class="mb-32">
      <h1 class="mt-48 text-center">Tus últimas creaciones</h1>

      <div class="container d-flex flex-column align-items-center">
        <div class="d-lg-none d-flex flex-column align-items-center">
          <p class="mt-32">
            Guardamos tus últimas 3 cartas personalizadas para que puedas verlas y inspirarte nuevamente.
          </p>
          <img class="mt-32" src="../assets/images/history_cards.png" alt="pikachu con una carta">
          <div class="mt-32">
            <RouterLink to="/history">Ver Historial</RouterLink>
            <img src="../assets/images/arrow_right.svg" alt="flecha">
          </div>
        </div>

        <div class="d-none d-lg-flex align-items-center gap-5 p-5">

          <img class="mt-32" src="../assets/images/history_card_desktop.png" alt="pikachu con una carta">
          <div>
            <p class="mt-32">
              Guardamos tus últimas 3 cartas personalizadas para que puedas verlas y inspirarte nuevamente.
            </p>
            <div class="mt-32">
              <RouterLink to="/history">Ver Historial</RouterLink>
              <img src="../assets/images/arrow_right.svg" alt="flecha">
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  gap: 56px;
  background-image: url(../assets/images/dots.png);
}

.hero>h1 {
  font-size: 3.5rem;
}

.hero>h2 {
  text-shadow: 0px 4px 4px #f9a232;
  color: var(--text-bg-white) !important;

}

.hero>a {
  font-size: 32px;
}

@media (min-width: 1200px) {
  .hero>h1 {
    font-size: 5.5rem;
    text-align: center;
  }

  .hero>h2 {
    font-size: 2.5rem;
    text-align: center;
  }

  .hero>a {
    font-size: 1.5rem;
  }

}
</style>
