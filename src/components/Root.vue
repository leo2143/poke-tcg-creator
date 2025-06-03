<script>

export default {
  name: "root"
}

</script>

<template>
  <section class="container full-height d-flex flex-column justify-content-center align-items-center">
    <h1 class="secondary-text">El laboratorio del Profesor Stein</h1>
    <h2>aprende todo sobre cartas TCG y crea la tuya con nuestro formulario.</h2>
    <div class="d-flex flex-column align-items-center justify-content-center">
      <RouterLink to="/home">Comenzar viaje</RouterLink>
      <img src="../assets/images/arrow_down.svg" alt="flecha hacia abajo">
    </div>
  </section>
</template>

<style scoped>
section {
  gap: 56px;
  background-image: url(../assets/images/dots.png);
}

h1 {
  font-size: 64px;
}

h2 {
  text-shadow: 0px 4px 4px #f9a232;
}

a {
  font-size: 32px;
}
</style>
