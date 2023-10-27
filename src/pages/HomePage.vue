<template>
  <div class="row"></div>
  <div class="row justify-content-center my-4 peopleYouMayKnowCard mx-5 p-3">
    <div class="col-12">
      <h3>People you may know</h3>
    </div>
    <div class="col-4" v-for="p in people" :key="p.id">
      <PeopleYouMayKnow :profile="p" />
    </div>
  </div>

  <div v-if="profile" class="row justify-content-center">
    <div class="col-10 justify-content-center">
      <PostForm v-if="profile.id" />
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col-10 justify-content-center">
      <div class="row text-center" v-for="p in posts" :key="p.id">
        <PostCard :post="p" />
      </div>
    </div>
  </div>

  <div @click.prevent="pageNext(nextPage)" class="downArrow mdi mdi-arrow-down-thin-circle-outline">

  </div>

</template>

<script>
import { computed } from "@vue/reactivity"
import { onMounted } from "vue"
import { postsService } from "../services/PostsService"
import { AppState } from '../AppState'
import PostCard from "../components/PostCard.vue"
import Pop from "../utils/Pop.js"
import PostForm from "../components/PostForm.vue"
import { profileService } from "../services/ProfileService"

export default {
  setup() {
    onMounted(() => {
      getAll();
      getAllProfiles();
    });
    async function getAll() {
      try {
        await postsService.getAll();
      }
      catch (error) {
        console.error(error);
        // @ts-ignore
        Pop.error(("[ERROR]"), error.message);
      }
    }
    async function getAllProfiles() {
      try {
        await profileService.getProfiles()
      } catch (error) {
        console.error(error)
        // @ts-ignore
        Pop.error(('[ERROR]'), error.message)
      }
    }
    return {
      posts: computed(() => AppState.posts),
      profile: computed(() => AppState.account),
      people: computed(() => AppState.peopleYouMayKnow.slice(-3)),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),

      async pageNext(page) {
        try {
          document.getElementById("top").scrollTo(0, 0)
          console.log('[PAGE]', page);
          await postsService.pageNext(page)
        } catch (error) {
          console.error(error)
          // @ts-ignore
          Pop.error(('[ERROR]'), error.message)
        }
      }
    };
  },
  components: { PostCard, PostForm }
}
</script>

<style scoped lang="scss">
.peopleYouMayKnowCard {
  background-color: #252526;
  color: #6d757d;
  text-shadow: 1px 1px black;
  border-radius: 2%;
}

.downArrow {
  text-align: center;
  color: rgba(255, 255, 255, 0.165);
  font-size: 75px;
}

.downArrow:hover {
  color: rgba(255, 255, 255, 0.466);
}
</style>
