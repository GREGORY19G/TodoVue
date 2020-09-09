<template>
    <div>
        <div class="text-center">
        <h1>Edit</h1> 
        </div>
        <Form :id="id" action="Edit"/>
    </div>
</template>
<script>
import Form from '../components/Form.vue'
export default {
    name:'Edit',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    components:{
        Form
    },
}
</script>