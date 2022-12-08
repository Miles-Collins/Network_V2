<template>
  <div class="mb-2 mx-2">
    <img class="postFormAvatar" :src="profile.picture" alt="">
  </div>
  <form action="" @submit.prevent="handleSubmit">
    <textarea class="form-control" name="body" id="" cols="30" rows="10" :placeholder='phrase'
      v-model="editable.body"></textarea>
    <input class="form-control" type="url" placeholder="Add a photo or video" v-model="editable.imgUrl">
    <button class="btn btn-primary mt-2" type="submit">
      <span>Post </span><i class="mdi mdi-send"></i>
    </button>
  </form>
</template>


<script>
import { computed, ref } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { postsService } from '../services/PostsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const editable = ref({})
    const phrase = ("                " + "Share what's happening" + " " + AppState.account.name)


    return {
      profile: computed(() => AppState.account),
      phrase,
      editable,

      async handleSubmit() {
        try {
          await postsService.create(editable.value)
          editable.value = {}
          Pop.toast("Post Created", 'success')
        } catch (error) {
          logger.log('[CREATING A POST]', error)
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
textarea {
  background-color: #252526;
  border: none;
}

.postFormAvatar {
  border-radius: 50%;
  height: 60px;
  width: 60px;
  object-fit: cover;
  top: 70px;
  position: relative;
}

input {
  background-color: #252526;
  margin-top: 2px;
  margin-bottom: 2px;
  border: none;
}

textarea:focus {
  background-color: #252526;
  color: #6d757d;
}

input:focus {
  background-color: #252526;
  color: #6d757d;
}
</style>