<template>
  <nav class="navbar navbar-expand-lg px-3 row dork ">
    <div class="col-3 navbar-brand d-flex align-items-center">
      <router-link class="" :to="{ name: 'Home' }">
        <div class="d-flex flex-column align-items-end">
          <img class="logo" alt="logo"
            src="https://www.designfreelogoonline.com/wp-content/uploads/2017/10/000899-eagle-01.png" />
        </div>
      </router-link>
      <form @submit.prevent="search" class="form-outline mx-1 px-0">
        <input v-model="query" class="rounded-pill form-control p-0 " id="search" type="search"
          placeholder="&nbsp Search..." />
        <!-- <button class="btn btn-outline-dark text-light" type="submit">
          <i class="text-dark mdi mdi-magnify"></i>
        </button> -->
      </form>
    </div>


    <div @click="reRoute('Home')"
      class="col-1 mx-1 specialMargin text-center selectable p-0 m-0 imgIconDiv mdi mdi-home-outline"></div>
    <div @click.prevent="graduated" class="col-1 mx-1 text-center selectable p-0 m-0 imgIconDiv mdi mdi-school-outline">
    </div>
    <div @click="reRoute('Market')" class="col-1 mx-1 text-center selectable p-0 m-0 imgIconDiv mdi mdi-store-outline">
    </div>
    <div class="col-1 mx-1 text-center selectable p-0 m-0 imgIconDiv mdi mdi-calendar-check-outline"></div>
    <div class="col-1 mx-1 text-center selectable p-0 m-0 imgIconDiv mdi mdi-pokemon-go"></div>


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
import { ref } from "vue"
import { router } from "../router"
import { postsService } from "../services/PostsService"
import Pop from "../utils/Pop"
import Login from './Login.vue'
export default {
  setup() {
    const query = ref('')

    return {
      query,

      reRoute(page) {
        try {
          // console.log(props.post.creator.id);
          router.push({ name: `${page}` })
        } catch (error) {
          console.error(error)
          // @ts-ignore 
          Pop.error(('[ERROR]'), error.message)
        }
      },

      async graduated() {
        try {
          await postsService.graduated()
        } catch (error) {
          console.error(error)
          // @ts-ignore 
          Pop.error(('[ERROR]'), error.message)
        }
      },

      async search() {
        try {
          console.log('[SEARCH PARAMETERS]', query.value);
          await postsService.search(query.value)
        } catch (error) {
          console.error(error)
          // @ts-ignore 
          Pop.error(('[ERROR]'), error.message)
        }
      }

    }
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

.imgIconDiv {
  color: white;
  font-size: 40px;
}

.imgIcon:active {
  color: blue;
}

.imgIconDiv:active {
  border: 2px solid #424244;
  color: #dcdedf;
}

.imgIconDiv:hover {
  border: 2px solid #424244;
}

.specialMargin {
  margin-left: 50px !important;
}
</style>
