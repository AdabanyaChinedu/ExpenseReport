<template>
  <div class="w-full flex items-center px-10 h-12 bg-blue-900">
     <h1 class="text-white font-bold">{{msg}}</h1>
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
