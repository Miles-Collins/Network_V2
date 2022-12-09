<template>

  <main v-if="(theThing == false)" class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Navbar class="p-0" />
      </div>
    </div>
    <div class="row">
      <div class="col-3 scroll">
        <LeftBar />
      </div>
      <div id="top" class="col-6 scroll">
        <router-view />
      </div>
      <div class="col-3 mx-0 px-0 scroll">
        <div class="my-3 row d-flex justify-content-center" v-for="a in ad" :key="a.title">
          <AdsCard :ad="a" />
        </div>
      </div>
    </div>
  </main>

  <main v-if="(theThing == true)">
    <div class="row">
      <div class="col-12 px-0">
        <Navbar class="p-0" />
      </div>
    </div>
    <div class="col-12">
      <router-view />
    </div>
  </main>





</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { adsService } from "./services/AdsService"

export default {
  setup() {
    onMounted(() => {
      getAds()
    })

    async function getAds() {
      try {
        await adsService.getAds()
      } catch (error) {
        console.error(error)
        // @ts-ignore 
        Pop.error(('[ERROR]'), error.message)
      }
    }

    return {
      account: computed(() => AppState.account),
      appState: computed(() => AppState),
      ad: computed(() => AppState.ads),
      theThing: computed(() => AppState.theThing)
    };
    components: { Navbar }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

.scroll {
  overflow-x: hidden;
  overflow-y: scroll;
  height: 90vh;
}

.scroll::-webkit-scrollbar {
  width: 4px;
  height: 75vh;
  background-color: #18191a;
  border-radius: 50%;
}

.scroll::-webkit-scrollbar-thumb {
  background: #424244;
}

body {
  width: 100%;
  height: auto;
  background-color: #18191a !important;
}

.rightBar {
  height: 100vh;
  right: 0
}

main {
  max-height: 100vh;
  overflow-y: auto;
}

.width {
  width: 100vw;
}

#top {
  scroll-behavior: smooth;
}
</style>
