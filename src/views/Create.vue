<template>
    <div>
        <div class="text-center">
        <h1>Create Task</h1>
        </div>
        <Form action="Create"/> 
    </div>
</template>
<script>
import Form from '../components/Form.vue'
import {mapMutations} from 'vuex'
export default {
    name:'Create',
    components:{
        Form
    },
    mounted() {
        this.clean();
    },
    methods: {
        ...mapMutations(['clean'])
    },
}
</script>