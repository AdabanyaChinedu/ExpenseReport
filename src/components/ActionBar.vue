<template>
  <div class="w-full flex items-center">
     <button @click="$emit('open-create-form')" class="text-blue-900 px-2 py-1 border-2 border-blue-900 text-sm font-semibold">
       New Expense
     </button>     
  </div>
</template>

<script>
export default {
  name: 'ActionBar',
  props: {
    
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
