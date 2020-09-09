import Vue from 'vue';
import Vuex from 'vuex';
import {db} from '../Firebase';
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:[],
    task:{
      task: '',
      priority: 'Low',
      owner: '',
      completed: false
    }
  },
  mutations: {
    setTasks(state,payload){
      state.tasks = payload;
    },
    setTask(state, payload){
      state.task = payload;
    },
    clean(state){
      state.task.task = '';
      state.task.priority = 'Low';
      state.task.owner = '';
      state.task.completed = false;
    },
    setDeleted(state,payload){
      state.tasks = state.tasks.filter(x=>x.id !== payload);
    }
  },
  actions: {
    getAll({commit}){
      const tasks=[];
      db.collection('tasks').get().then(
        doc=>{
          doc.forEach(element => {
            let task = element.data();
            task.id = element.id;
            tasks.push(task)        
          });
          commit('setTasks', tasks);
        }
      )
    },
    getTask({commit},id){
      db.collection('tasks').doc(id).get().then(x=>{
        let task = x.data();
        task.id = x.id;
        commit('setTask', task)
      })
    },
    insert({commit}, obj){
      db.collection('tasks').add({
        task: obj.task,
        owner:  obj.owner,
        completed:  obj.completed,
        priority: obj.priority
      }).then(()=>console.log(''));
      commit('clean')
      router.push('/')
    },
    update({commit}, obj){
      db.collection('tasks').doc(obj.id).update({
        task: obj.task,
        owner:  obj.owner,
        completed:  obj.completed,
        priority: obj.priority
      }).then(()=>{
        commit('clean')
        router.push('/');
      })
    },
    deleteTask({commit}, id){
      db.collection('tasks').doc(id).delete().then(()=>{
        commit('setDeleted', id)
      })
    }
  },
  modules: {
  }
})
