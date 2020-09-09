<template>
    <div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Owner</th>
      <th scope="col">Priority</th>
      <th scope="col">Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(task, index) in tasks" :key="index"
    >
      <th>{{task.task}}</th>
      <td>{{task.owner}}</td>
      <td>{{task.priority}}</td>
      <td>
        <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" :checked="task.completed" disabled="true" id="esto"/>
        <label class="custom-control-label" for="esto"></label>
        </div>
      </td>
      <td>
          <div class="float-right">
          <button @click="deleteTask(task.id)" type="button" class="btn btn-danger">Delete</button>
          <router-link :to="{name:'Edit',params:{id:task.id}}" class="btn btn-warning">Edit</router-link>
          </div>
      </td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name:'List',
    methods: {
        ...mapActions(['getAll','deleteTask'])
    },
    computed: {
        ...mapState(['tasks'])
    },
    created() {
        this.getAll()
    },
}
</script>