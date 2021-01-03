<template>
  <div class="">
    <el-table
      :data="expenses"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <div>
            <p> Item  Id: {{ props.row.itemId }}</p>
            <p>Name: {{ props.row.name }}</p>
            <p>Category: {{ props.row.category }}</p>
            <p>Amount: {{ props.row.amount }}</p>
            <p>Date: {{ props.row.date }}</p>
            <p>Description: {{ props.row.description }}</p>
          </div>         
        </template>
      </el-table-column>
      <el-table-column
        label="Item Id"
        sortable
        prop="itemId">
      </el-table-column>
      <el-table-column
        label="Name"
        prop="name">
      </el-table-column>
      <el-table-column
        label="Category"
        prop="category">
      </el-table-column>
      <el-table-column
        label="Amount"
        sortable
        prop="amount">
      </el-table-column>
      <el-table-column
        label="Date"
        sortable
        prop="date">
      </el-table-column>
      <el-table-column
        label="Actions">
        <template slot-scope="props">
          <span class="cursor-pointer"  :key= "props.row.id+ '-a'"> 
            <i class='fas fa-pen fa-sm text-blue-800'></i>
          </span>     
          <span class="cursor-pointer"  :key= "props.row.id + '-b'" >
            <i class='fas fa-trash fa-sm text-red-800 ml-4'></i>
          </span>
        </template>
      </el-table-column>      
    </el-table>
  </div>  
</template>

<script>
export default {
  name: 'ExpenseTable',
  props: {    
    expenses:{
      type: Array,
      required: true
    }
  },
  data(){
        return {
        tableData: []
      }
    },
  computed:{
    // expenses: {
    //   get: function () {
    //     return JSON.parse(localStorage.getItem('expenses')) || [];
    //   },
    //   set: function (value) {
    //     localStorage.clear()       
    //     localStorage.setItem("expenses", JSON.stringify(value))
    //   }
    // }
  }
}
</script>
 


<style scoped>

</style>
