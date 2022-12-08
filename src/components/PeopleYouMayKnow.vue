<template>

  <div class="card col-12 mt-1">
    <img :src="profile.picture" class="card-img-top img-fluid who" alt="...">
    <div class="card-body p-1">
      <p class="nameSize m-0 p-0 card-text text-light">{{ personName }}</p>
    </div>
  </div>

</template>

<script>

export default {
  props: { profile: { type: Object, required: true } },


  setup(props) {
    const newName = props.profile.name.split("@")[0]
    const personName = newName.charAt(0).toUpperCase() + newName.slice(1)


    return {
      newName,
      personName,
    }
  }
}
</script>

<style scoped>
.who {
  height: 250px;
  width: 100%;
  object-fit: cover;
}

.nameSize {
  font-size: small;
}

.card {
  background-color: #252526 !important;
  border: 1px solid #3e4042;
}
</style>