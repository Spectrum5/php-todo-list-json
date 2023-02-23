const { createApp } = Vue;

createApp({
  data() {
    return {
      titol: 'Todo List',
      todoList: []
    }
  },
  methods: {

  },
  created() {
    //chiamata al server per accedere ai dati con axios
    axios.get('server.php').then((res) => {
      console.log(res.data);
      this.todoList = res.data;
    })
  }
}).mount('#app')