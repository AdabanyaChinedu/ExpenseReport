<template>
  <div class="w-full flex items-center">
      <p class="">{{confirmMsg}}</p>
     <button @click="$emit('close-confirm-card')" class="text-blue-900 px-2 py-1 border-2 border-blue-900 text-sm font-semibold">
       Ok
     </button>     
  </div>
</template>

<script>
export default {
  name: 'ConfirmationCard',
  props: {
    confirmMsg:{
    type: String,
    required: true
  }
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  }
}
</script>


<style scoped>

</style>
