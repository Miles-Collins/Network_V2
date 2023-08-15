<template>
  <div class="row d-flex justify-content-center">
    <div class="col-8">
      <img class="coverImg" :src="account.coverImg" alt="" />
    </div>
  </div>
  <div class="row">
    <div class="col-2 offset-2">
      <div class="about">
        <img class="movement" :src="account.picture" alt="" />
      </div>
    </div>
  </div>

  <AccountForm v-if="account" />
</template>

<script>
import { computed, onMounted, onUnmounted } from "vue";
import { AppState } from "../AppState";
import { profileService } from "../services/ProfileService";
import Pop from "../utils/Pop.js";
export default {
  setup() {
    onMounted(() => {
      doTheThing();
    });
    onUnmounted(() => {
      doTheThing();
    });

    function doTheThing() {
      try {
        profileService.doTheThing();
      } catch (error) {
        console.error(error);
        // @ts-ignore
        Pop.error("[ERROR]", error.message);
      }
    }

    {
      return {
        account: computed(() => AppState.account),
      };
    }
  },
};
</script>

<style scoped>
.coverImg {
  height: 50vh;
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
  border: 5px solid #18191a;
}

body {
  background-color: #18191a;
}
</style>
