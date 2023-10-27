<template>
  <div v-if="account">
      <div class='row d-flex justify-content-center'>

    <router-link :to="{ name: 'Account' }" class="col-12 mt-3 selectable">
      <img v-if="account.id" class="mt-1 circle" :src="account.picture">
      <span class="text-center mt-3 font">&nbsp; {{ account.name }}</span>
    </router-link>
  </div>

  <div class="col-12 mt-3 selectable">
    <img v-if="account.id" class="mt-1 circle"
      src="https://cdn1.iconfinder.com/data/icons/seo-outline-colored-5/128/target_group_group_People_Friends_Group_Conversation_Team_Community-512.png">
    <span class="text-center mt-3 font">&nbsp; Friends</span>
  </div>

  <div class="col-12 mt-3 selectable">
    <img v-if="account.id" class="mt-1 circle"
      src="https://cdn1.iconfinder.com/data/icons/seo-outline-colored-5/128/target_group_group_People_Friends_Group_Conversation_Team_Community-512.png">
    <span class="text-center mt-3 font">&nbsp; Most Recent</span>
  </div>

  <div class="col-12 mt-3 selectable">
    <img v-if="account.id" class="mt-1 circle"
      src="https://cdn1.iconfinder.com/data/icons/seo-outline-colored-5/128/target_group_group_People_Friends_Group_Conversation_Team_Community-512.png">
    <span class="text-center mt-3 font">&nbsp; Groups</span>
  </div>

  <div class="col-12 mt-3 selectable">
    <img v-if="account.id" class="mt-1 circle"
      src="https://cdn1.iconfinder.com/data/icons/seo-outline-colored-5/128/target_group_group_People_Friends_Group_Conversation_Team_Community-512.png">
    <span class="text-center mt-3 font">&nbsp; Marketplace</span>
  </div>

  <div class="col-12 mt-3 selectable">
    <img v-if="account.id" class="mt-1 circle"
      src="https://cdn1.iconfinder.com/data/icons/seo-outline-colored-5/128/target_group_group_People_Friends_Group_Conversation_Team_Community-512.png">
    <span class="text-center mt-3 font">&nbsp; Watch</span>
  </div>

  <div class="col-12 mt-3 selectable">
    <img v-if="account.id" class="mt-1 circle"
      src="https://cdn1.iconfinder.com/data/icons/seo-outline-colored-5/128/target_group_group_People_Friends_Group_Conversation_Team_Community-512.png">
    <span class="text-center mt-3 font">&nbsp; Memories</span>
  </div>

  <div class="col-12 mt-3 selectable">
    <img v-if="account.id" class="mt-1 circle"
      src="https://cdn1.iconfinder.com/data/icons/seo-outline-colored-5/128/target_group_group_People_Friends_Group_Conversation_Team_Community-512.png">
    <span class="text-center mt-3 font">&nbsp; Saved</span>
  </div>

  <div class="col-12 mt-3 selectable">
    <img v-if="account.id" class="mt-1 circle"
      src="https://cdn1.iconfinder.com/data/icons/seo-outline-colored-5/128/target_group_group_People_Friends_Group_Conversation_Team_Community-512.png">
    <span class="text-center mt-3 font">&nbsp; Pages</span>
  </div>

  <div class="col-12 mt-3 selectable">
    <img v-if="account.id" class="mt-1 circle"
      src="https://cdn1.iconfinder.com/data/icons/seo-outline-colored-5/128/target_group_group_People_Friends_Group_Conversation_Team_Community-512.png">
    <span class="text-center mt-3 font">&nbsp; News</span>
  </div>

  </div>


</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { Account } from "../models/Account";


export default {

  setup() {



    return {
      account: computed(() => AppState.account)

    }
  }
}
</script>

<style scoped>
.leftBar {
  height: 100vh;
  width: 250px;
  background-color: #18191a !important;
}

.circle {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  object-fit: cover;
}

.font {
  color: #6d757d;
  text-shadow: 1px 1px black;
}
</style>
