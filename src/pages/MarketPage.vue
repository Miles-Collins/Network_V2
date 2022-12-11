<template>
  <div class="row">
    <div class="col-4" v-for="c in cars">
      <CarsCard :car="c" />
    </div>
  </div>

</template>

<script>
import { computed } from "@vue/reactivity"
import { onMounted } from "vue"
import { AppState } from "../AppState"
import CarsCard from "../components/CarsCard.vue"
import { carsService } from "../services/CarsService"
import Pop from "../utils/Pop"


export default {
  setup() {
    onMounted(() => {
      getCars();
    });
    async function getCars() {
      try {
        await carsService.getCars();
      }
      catch (error) {
        console.error(error);
        // @ts-ignore 
        Pop.error(("[ERROR]"), error.message);
      }
    }
    return {
      cars: computed(() => AppState.cars)
    };
  },
  components: { CarsCard }
}
</script>

<style>

</style>