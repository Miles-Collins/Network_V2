<template>

  <div class="my-3 card dork mx-0 px-0 ">
    <div class="row">
      <div class="col-1">
        <img @click="profilePush()" class="avatar" :src=post.creator.picture alt="Profile Picture"
          :title="post.creator.name">
      </div>
      <div class="col-6 text-start mx-4 mt-2">
        <span class="">{{ post.creator.name }}</span> <br>
        <span>{{ new Date(post.createdAt).toDateString('us-en') }} </span><span>&nbsp</span><span> {{ new
            Date(post.createdAt).toLocaleTimeString('us-en')
        }}</span>
      </div>
      <div class="col-1 offset-3">
        <div v-if="post.creator.id == account.id">
          <button class="btn btn-outline text-light" @click="deletePost(post.id)"> <i class="mdi mdi-delete"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-start mx-3">
        <p class="my-2">{{ post.body }}</p>
      </div>
    </div>
    <img class="postImg" :src=post.imgUrl alt="">
    <div class="div my-2 text-start">
      <i class="mdi mdi-heart-outline"> {{ post.likes.length }}</i>
      &nbsp;<span> {{ post?.likes[0]?.name }}...</span>
    </div>
  </div>

</template>

<script>
import { computed } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { AppState } from "../AppState";
import { onMounted, ref } from "vue";
import { router } from "../router";
import { postsService } from "../services/PostsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop";


export default {
  props: {
    post: { type: Object, required: true }
  },


  setup(props) {
    onMounted(() => {
      // console.log('[POSTCARD PROPS]', likesName);
    })
    const router = useRouter()
    const deleting = ref(false)
    // const likesName = props.post.likes[0].name
    return {
      // likesName,
      deleting,
      account: computed(() => AppState.account),

      profilePush() {
        try {
          console.log(props.post.creator.id);
          router.push({ name: 'Profile', params: { id: props.post.creator.id } })
        } catch (error) {
          console.error(error)
          // @ts-ignore 
          Pop.error(('[ERROR]'), error.message)
        }
      },

      async deletePost(postId) {
        try {
          // console.log(props.post.id)
          const yes = await Pop.confirm("Do you want to delete this post?")
          if (!yes) { return }
          await postsService.delete(postId)
        } catch (error) {
          logger.error('[DELETING POST]', error)
          Pop.error(error)
        }
      }


    };

  }
}
</script>

<style>
.avatar {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  object-fit: cover
}

.postImg {
  height: 45VH;
  width: 100%;
  object-fit: cover;
}

.postBg {
  background-image: url(`props.posts.creator.picture`);
}

.dork {
  background-color: #252526;
  color: rgb(243, 240, 238);
}
</style>