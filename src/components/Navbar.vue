<script>
export default {
  name: 'navbar'
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MiApp</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
        aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse full-screen-mobile" id="mainNavbar">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 991.98px) {
  .full-screen-mobile {
    position: fixed;
    top: 56px;
    left: 0;
    width: 100%;
    height: calc(100% - 56px);
    background-color: #fff;
    z-index: 1040;
    padding: 1rem;
    overflow-y: auto;
  }
}

nav {
  padding-top: env(safe-area-inset-top);
  height: calc(56px + env(safe-area-inset-top));

}
</style>
