<template>

  <div class="ad-container col-8">
    <img class="img-fluid" :src="ad.tall" alt="">
  </div>

</template>

<script>


export default {
  props: {
    ad: { type: Object, required: true }
  },


  setup(props) {



    return {

    }
  }
}
</script>

<style>

</style>