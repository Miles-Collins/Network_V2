<template>
  <nav class="navbar navbar-expand-lg px-3 row dork ">
    <div class="col-3 navbar-brand d-flex align-items-center">
      <router-link class="" :to="{ name: 'Home' }">
        <div class="d-flex flex-column align-items-end">
          <img class="logo" alt="logo"
            src="https://www.designfreelogoonline.com/wp-content/uploads/2017/10/000899-eagle-01.png" />
        </div>
      </router-link>
      <div class="form-outline mx-1 px-0">
        <input class="rounded-pill form-control p-0" id="search" type="search" placeholder="&nbsp Search..." />
      </div>
    </div>


    <button class="col-1 mx-1">HOME</button>
    <button class="col-1 mx-1">ALUMNI</button>
    <button class="col-1 mx-1">TEST</button>
    <button class="col-1 mx-1">TEST</button>
    <button class="col-1 mx-1">TEST</button>

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

input#search {
  background-color: #424244;
  border: none;
  height: 40px;
  width: 100%;
}

input[type=text] {
  width: 100px;
  transition: ease-in-out, width .35s ease-in-out;
}

input:focus {
  background-color: #424244;
  color: #c1c3c4;
  text-shadow: 1px 1px black;
  border: none;
  outline: none;
}

input:-webkit-autofill {
  background-color: #424244;
}

.form-outline {
  width: 100%;
}
</style>
