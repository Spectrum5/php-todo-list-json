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
      const todoFormData = {
        //nome della chiave: valore della chiave
        newTodoText: this.newTodoText,
      }

      axios.post(
        this.apiUrl,
        todoFormData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      ).then((response) => {
        console.log(response.data);

        this.getTodo();

        this.newTodoText = '';

      });
    },

  toggleTodo(index) {
    // console.log(index);

    const todoFormData = {
      toggleTodoIndex: index,
    }

    axios.post(
      this.apiUrl,
      todoFormData,
      //headers per ingannare il server e fargli credere che è un form
      { headers: { 'Content-Type': 'multipart/form-data' } }
    ).then((response) => {
      // console.log(response.data);
      this.getTodo(); //funzione che aggiorna i to do ricaricando la pagina
    });
  },

  deleteTodo(index) {
    const todoFormData = {
      deleteTodoIndex: index,
    }

    axios.post(
      this.apiUrl,
      todoFormData,
      //headers per ingannare il server e fargli credere che è un form
      { headers: { 'Content-Type': 'multipart/form-data' } }
    ).then((response) => {
      // console.log(response.data);

      this.getTodo(); //funzione che aggiorna i to do ricaricando la pagina
    });
  }
},

  mounted() {
  this.getTodo();
}
}).mount('#app')