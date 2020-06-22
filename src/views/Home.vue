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
         <ExpenseTable/>
      </div>      
    </div>  
    <!-- Modal   -->
    <Modal v-if="modal" @close-modal="closeModal()" :formType="formType">
       <div>
        <ExpenseForm v-if="formType.create" @close-modal="closeModal()" @create-form="createExpense()"/>
        <DeleteCard v-if="formType.delete"/>
        <ConfirmationCard v-if="formType.confirm"/>
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
      },
      modal: false      
    }
  },
  methods:{
    openModal(actionType){
      this.modal = true
      if(actionType == "create_expense"){
        this.formType.create = true
      }
      if(actionType == "edit_expense"){
        this.formType.create = true
      }
      if(actionType == "delete_expense"){
        this.formType.delete = true
      }

    },
    closeModal(){
      this.modal= false
    },
    createExpense(expense){
     alert(expense)
    }
  }
}
</script>

<style>

</style>
