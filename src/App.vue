<script>
import { RouterLink, RouterView } from 'vue-router'
import 'animate.css';



export default {
  name: "app",

  data() {
    return {}
  }
}
</script>


<template>
  <header class="mt-5">
    <nav class="navbar navbar-expand-lg bg-light fixed-top shadow-sm">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/#hero">
          <img src="@/assets/images/pokeball-icon.png" class="img-fluid pokeball-icon" alt="imagen pokeball">
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
          aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse full-screen-mobile" id="mainNavbar">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

            <li class="nav-item">
              <RouterLink to="/create-card" class="nav-link">laboratorio</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/history" class="nav-link">Historial</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />



  <footer class="bg-darkBlue">
    <div
      class="container  text-light text-center d-flex flex-column justify-content-between align-items-center p-5 fw-medium fs-4 flex-lg-row">
      <div class="d-flex justify-content-center gap-5 align-items-center text-center mb-1">
        <div class="">
          <a href="https://www.instagram.com/leo.orellana_/">
            <img class="img-fluid" src="@/assets/images/footer/instagram-logo.svg" alt="icono de instagram" />
          </a>
        </div>
        <div class="">
          <p>Leonardo Orellana</p>
        </div>
        <div class="">
          <a href="https://www.linkedin.com/in/leonardo-orellana-998740222/?originalSubdomain=ar">
            <img class="img-fluid" src="@/assets/images/footer/linkeding-logo.svg" alt="linkedin logo" />
          </a>
        </div>
      </div>
      <div class="">
        <img class="img-fluid rounded-5" src="@/assets/images/footer/foto-de-mi.svg" alt="foto retrato propia" />
      </div>
      <div class="">
        <div class="">
          <p>leonardo.orellana@davinci.edu.ar</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.navbar {
  background-color: var(--bg-color) !important;
}

.nav-link {

  transition: all 0.3s;
  font-weight: 700;
}

.nav-link:hover {

  color: var(--tertiary-color);

}

.pokeball-icon:hover {

  transform: rotate(360deg);
  transition: all 1s;
}
</style>
