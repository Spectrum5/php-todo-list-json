const { createApp } = Vue ; 

createApp({
  data() {
    return {
      titol: 'Todo List',
        todoList: [],
        task:{
            text: '',
            done: false
        }
    }
  },
  methods:{

  },
  created() {
    axios
      .get('./server.php')
  }
}).mount('#app')