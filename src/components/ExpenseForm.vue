<template>
  <div class="w-full flex">
    <form class="w-full">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-left text-xs font-bold mb-2" for="name">
            Item Name
          </label>
          <input class="appearance-none text-sm block w-full bg-white text-gray-700 border py-1 px-2 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Book">
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-left mb-2" for="amount">
            Amount
          </label>
          <input class="appearance-none text-sm block w-full bg-white text-gray-700 border py-1 px-2 mb-3 leading-tight focus:outline-none focus:bg-white" id="amount" type="text" placeholder="10,000.00">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2" for="category">
            Category
          </label>
          <input class="appearance-none text-sm block w-full bg-white text-gray-700 border py-1 px-2 mb-3 leading-tight focus:outline-none focus:bg-white" id="category" type="text" placeholder="Stationary">
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2" for="date">
            Date
          </label>
          <input class="appearance-none text-sm block w-full bg-white text-gray-700 border py-1 px-2 mb-3 leading-tight focus:outline-none focus:bg-white" id="date" type="text" placeholder="2020-06-21">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <label class="block uppercase tracking-wide text-gray-700 text-xs mx-3 font-bold mb-2" for="description">
            Description <i class="italic capitalize font-normal">(Optional)</i>
          </label>
        <textarea type="text" class="appearance-none w-full text-sm p-2 mx-3 resize-none border focus:border-1 focus:border-gray-800" id="description" rows="8"></textarea>
      </div>

      <div class="flex flex-wrap justify-end mt-10">
        <button @click="$emit('close-modal')" class="text-blue-800 px-2 py-1 border border-blue-900 text-sm font-medium mr-3">Cancel</button>
        <button @click="$emit('create-expense', expense)" class="text-white px-3 py-1 border bg-blue-900 text-sm font-semibold">Add</button>
      </div>
      
    </form>
  </div>
</template>

<script>
export default {
  name: 'ExpenseForm',
  props: {
    
  },
  data(){
    return{
       expense:{
         name: "",
         amount: "",
         category: "",
         date:"",
         description:""
       }
    }
  },
  methods:{
    
  }
}
</script>


<style scoped>

</style>