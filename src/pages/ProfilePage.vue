<template>
  <div class="bgProfile mb-5">
    <div class="row d-flex justify-content-center">
      <div class="col-10">
        <img class="coverImg" :src="profile.coverImg" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-2 offset-2">
        <img class="movement" :src="profile.picture" alt="">
      </div>

      <div class="col-5 px-0 mx-0">
        <h1 class="text-light mt-4">{{ profile.name }}</h1>
        <a v-if="profile.github" :href="profile.github"> <img class="icon mx-2"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" srcset=""></a>
        <a v-if="profile.linkedin" :href="profile.linkedin"> <img class="icon mx-2"
            src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" alt=""
            srcset=""></a>
        <a v-if="profile.resume" :href="profile.resume"> <img class="icon mx-2"
            src="https://www.freeiconspng.com/thumbs/resume-icon-png/resume-icon-png-15.png" alt="" srcset=""></a>
      </div>
    </div>
  </div>


  <!-- <h1>{{ profile.name }}</h1>
  <p>{{ profile.bio }}</p>
  <p>Class: {{ profile.class }}</p>
  <span>Has Graduated: {{ profile.graduated }}</span> <br>
  <span>Github: {{ profile.github }}</span> <br>
  <span>LinkedIn: {{ profile.linkedin }}</span> <br>
  <span>Resume: {{ profile.resume }}</span> <br>
  <span>Email: {{ profile.email }}</span> <br> -->

  <div class="row justify-content-center">
    <div class="col-4 justify-content-center">
      <div class="row">
        <PostForm />
      </div>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col-4 justify-content-center">
      <div class="text-center row" v-for="p in posts" :key="p.id">
        <PostCard :post="p" />
      </div>
    </div>
  </div>

</template>

<script>
import { computed } from "@vue/reactivity"
import { onMounted, onUnmounted } from "vue"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
import PostForm from "../components/PostForm.vue"
import { profileService } from "../services/ProfileService"
import Pop from "../utils/Pop"


export default {
  setup() {
    const route = useRoute();
    onMounted(() => {
      getPosts();
      getProfile();
      doTheThing();
    })
    onUnmounted(() => {
      doTheThing()
    })

    function doTheThing() {
      try {
        profileService.doTheThing()
      } catch (error) {
        console.error(error)
        // @ts-ignore 
        Pop.error(('[ERROR]'), error.message)
      }
    }

    async function getPosts() {
      try {
        console.log(route.params.id);
        let profileId = route.params.id;
        await profileService.getPostsById(profileId);
      }
      catch (error) {
        console.error(error);
        // @ts-ignore 
        Pop.error(("[ERROR]"), error.message);
      }
    }
    async function getProfile() {
      try {
        await profileService.getProfileById(route.params.id);
      }
      catch (error) {
        console.error(error);
        // @ts-ignore 
        Pop.error(("[ERROR]"), error.message);
      }
    }
    return {
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.profilePost)
    };
  },
  components: { PostForm }
}
</script>

<style scoped>
.coverImg {
  height: 50VH;
  width: 100%;
  object-fit: cover;
}

.movement {
  top: -40px;
  position: relative;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  object-fit: cover;
  border: 5px solid #252526;
}

.icon {
  height: 40px;
  width: 40px;
  object-fit: cover;
}

.bgProfile {
  background: rgb(37, 37, 38);
  background: linear-gradient(360deg, rgba(37, 37, 38, 1) 36%, rgba(62, 62, 62, 1) 64%, rgba(196, 196, 196, 1) 100%);
}
</style>