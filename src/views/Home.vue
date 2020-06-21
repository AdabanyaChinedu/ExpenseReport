<template>
  <div>
    <div>
      <Header msg="ExpMgr"/>
    </div>
    <div class="p-10">
      <div>
        <ActionBar/>
      </div>
      <div class="mt-6">
         <ExpenseTable/>
      </div>      
    </div>  
    <!-- Modal   -->
    <Modal :formType="formType">
       <div>
        <ExpenseForm />
        <DeleteCard />
        <ConfirmationCard />
       </div>
    </Modal>
  </div>
</template>

<script>
import Header from '@/components/Header'
import ActionBar from '@/components/ActionBar'
import ExpenseTable from '@/components/ExpenseTable'
import Modal from '@/components/Modal'
import ExpenseForm from '@/components/ExpenseForm'
import DeleteCard from '@/components/DeleteCard'
import ConfirmationCard from '@/components/ConfirmationCard'


export default {
  name: 'Home',
  components: {
    Header,
    ActionBar,
    ExpenseTable,
    Modal,
    ExpenseForm,
    DeleteCard,
    ConfirmationCard
  },
  data(){
    return{
      actionType: "",
      formType:{
        create: true,
        delete: false,
        confirm: false
      }
      
    }
  }
}
</script>

<style>

</style>
