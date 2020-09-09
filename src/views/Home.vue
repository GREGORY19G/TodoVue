<template>
  <div class="container">
    <router-link class="btn btn-success my-3 btn-block" to="Create">
        New task
      </router-link>
    <List />
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex'
import List from '../components/List.vue'
export default {
  name: 'Home',
  components: {
    List
  },
  methods: {
    ...mapActions(['deleteTask'])
  },
}
</script>
