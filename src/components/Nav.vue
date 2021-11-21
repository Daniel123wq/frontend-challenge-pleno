<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-device pad">
    <div class="container-fluid mt-4">
      <a class="navbar-brand" href="#">
        <img
          class="logo"
          src="~@/assets/logo.png"
          alt=""
          width="117"
          height="20"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Preços</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Desenvolvedores</a>
          </li>
        </ul>
        <form class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <div class="input-group mb-0">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline"
                type="button"
              >
                <!-- <b-icon font-scale="1" icon="search" variant="white"></b-icon> -->
              </button>
            </div>
            <li class="nav-item">
              <a class="nav-link" href="#">Ajuda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contato</a>
            </li>
            <button type="button" class="btn btn-outline-light rounded-pill">Começar</button>
          </ul>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {},
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  z-index: 2;
  width: 100%;
}

.nav-opacity {
    background: linear-gradient(80deg, $primary, $secondary);
}
// Small devices (landscape phones, 576px and up)
@media (min-width: 350px) and (max-width: 576px) {
  .navbar-collapse {
    background: linear-gradient(80deg, $primary, $tertiary);
    border-color: $secondary;
    border-style: inset;
    border-color: $primary;
    text-align: center;
  }
}

</style>