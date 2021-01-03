<template>
  <div>
    <div>
      <Header msg="ExpMgr"/>
    </div>
    <div class="p-10">
      <div>
        <ActionBar @open-create-form="openModal('create_expense')"/>
      </div>
      <div class="mt-6">
         <ExpenseTable :expenses="expenses"/>
      </div>      
    </div>  
    <!-- Modal   -->
    <Modal v-if="modal" @close-modal="closeModal()"  :formType="formType">
       <div>
        <ExpenseForm v-if="formType.create" @close-modal="closeModal()" @create-expense="createExpense"/>
        <DeleteCard v-if="formType.delete"/>
        <ConfirmationCard v-if="formType.confirm" :confirmMsg="confirmMsg"/>
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
        create: false,
        delete: false,
        confirm: false
      },
      modal: false,
      confirmMsg: "",
      createSuccessful: false,
      expenses:[]
    }
  },
  
  methods:{
    openModal(actionType){
      this.modal = true
      if(actionType === "create_expense"){
        this.formType.create = true
      }
      if(actionType === "edit_expense"){
        this.formType.create = true
      }
      if(actionType === "delete_expense"){
        this.formType.delete = true
      }

    },
    closeModal(){
      this.modal= false
    },
    createExpense(expense){
      let expenses = JSON.parse(localStorage.getItem('expenses')) || []
      expense.itemId = expenses.length + 1
      expenses.push(expense)
      this.expenses.push(expense)
      localStorage.setItem("expenses", JSON.stringify(expenses))
      this.createSuccessful = true
    }
  },
  mounted(){
    
      this.expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    }
    
  
}
</script>

<style>

</style>
