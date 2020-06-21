<template>
  <div>
    <div>
      <Header msg="ExpMgr"/>
    </div>
    <div class="">
      <ActionBar/>
      <ExpenseTable/>
    </div>
    
    
  </div>
</template>

<script>
import Header from '@/components/Header'
import ActionBar from '@/components/ActionBar'
import ExpenseTable from '@/components/ExpenseTable'


export default {
  name: 'Home',
  components: {
    Header,
    ActionBar,
    ExpenseTable
  }
}
</script>

<style>

</style>
