const { createApp } = Vue;

createApp({
  data() {
    return {
      titol: 'Todo List',
      apiUrl: './server.php',
      todoList: [],
      newTodoText: ''
    }
  },
  methods: {
    getTodo() {
      axios.get(this.apiUrl).then((response) => {
        // console.log(response.data);
        this.todoList = response.data;
      });
    },
    addTodo() {
      const data = {
        //nome della chiave: valore della chiave
        newTodoText: this.newTodoText,
      }

      axios.post(
        this.apiUrl,
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      ).then((response) => {
        console.log(response.data);

        this.getTodo();

        this.newTodoText = '';

      });
    }
  },
  mounted() {
    this.getTodo()
  }
}).mount('#app')