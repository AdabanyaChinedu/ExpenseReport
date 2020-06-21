<template>
  <div id="modal" class="fixed inset-0 h-full w-full bg-gray-800 bg-opacity-25 cursor-default flex z-20 overflow-auto">
    <div v-bind:class="formWidthClass" class="fixed shadow-inner md:relative pin-b pin-x align-top m-auto md:justify-center p-8 bg-white md:h-auto md:shadow w-full flex flex-col">
      <slot></slot>          
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
  formType:{
    type: Object,
    required: true
  }
  },
  computed:{
    formWidthClass: function(){
      return {
          'max-w-2xl': this.formType.create,
          'max-w-md': this.formType.delete || this.formType.confirm
      }
    }
  },
  data(){
    return{
     
    }
  }
}
</script>


<style scoped>

</style>