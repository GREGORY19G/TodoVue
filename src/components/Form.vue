<template>
    <div class="container">
  <form @submit.prevent="save()">
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label>Task</label>
      <input v-model="task.task" type="text" class="form-control" required>
    </div>
    <div class="col-md-6 mb-3">
      <label>Owner</label>
      <input v-model="task.owner" type="text" class="form-control" required>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">Priority</label>
        <select class="custom-select" required v-model="task.priority">
        <option selected disabled value="">Priority</option>
        <option v-for="(item, index) of priorities" :key="index">{{item}}</option>      </select>
    </div>
    <div class="col-md-3 mb-3">
      <label>Completed</label>
      <div class="custom-control custom-switch mt-2">
        <input type="checkbox" class="custom-control-input" v-model="task.completed" id="this"/>
        <label class="custom-control-label" for="this"></label>
        </div>
    </div>
  </div>
        <button class="btn btn-primary btn-block" type="submit">Save</button>
</form>
</div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    name:'Form',
    props:['action', 'id'],
    data() {
        return {
            priorities:['Hight','Midium','Low'],
        }
    },
    computed: {
      ...mapState(['task'])
    },
    mounted() {
      if(this.id){
        this.getTask(this.id)
      }
    },
    methods: {
      ...mapActions(['insert', 'getTask', 'update']),
      save(){
        if (!this.id) {                     
            this.insert(this.task)
        }else{
          this.update(this.task)
        }
      }
    },
}
</script>