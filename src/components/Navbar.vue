<template>
  <nav class="navbar navbar-expand-lg px-3 row dork ">
    <router-link class="navbar-brand d-flex col-1" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-end">
        <img class="logo" alt="logo"
          src="https://www.designfreelogoonline.com/wp-content/uploads/2017/10/000899-eagle-01.png" />
      </div>
    </router-link>

    <button class="col-1 offset-2">HOME</button>
    <button class="col-1 mx-2">ALUMNI</button>
    <button class="col-1 mx-2">TEST</button>
    <button class="col-1 mx-2">TEST</button>
    <button class="col-1 mx-2">TEST</button>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end col-2" id="navbarText">

      <!-- <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>
      </ul> -->
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}

.dork {
  background-color: #252526;
}

.avatar {
  border-radius: 50%;
}

.logo {
  border-radius: 50%;
  height: 50px;
  width: 50px;
}
</style>
