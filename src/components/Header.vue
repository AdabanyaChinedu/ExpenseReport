<template>
  <div class="w-full flex items-center h-12 bg-gray-800">
     <h1 class="text-white mx-6 font-bold">{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Head',
  props: {
    msg: String
  }
}
</script>


<style scoped>

</style>
