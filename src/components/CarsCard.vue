<template>

  <div class=" carCard">
    <div class="row pt-1">
      <div class="col-12">
        <img class="img-fluid imageSize" :src="car.imgUrl" alt="" srcset="">
      </div>
    </div>
    <div class="row mt-1 s text-start">
      <div class="col-12 text-light">
        <h5>Price: ${{ car.price }}</h5>
      </div>
      <div class="col-12 text-light">
        <p>{{ car.year }} {{ car.make }} {{ car.model }}</p>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  props: { car: { type: Object, required: true } },


  setup() {



    return {

    }
  }
}
</script>

<style scoped>
.imageSize {
  height: 30vh;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}

p {
  margin: 0px;
  color: white;
  text-shadow: 1px 2px 1px black;
  font-size: small;
}

.carCard {

  border-radius: 5px;
  margin-top: 30px;
}
</style>