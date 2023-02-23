const { createApp } = Vue ; 

createApp({
  data() {
    return {
      titol: 'Todo List',
    }
  },
  methods:{

  },
  created() {
    axios
      .get('./js/server.php')
      .then((response) => {
        console.log(response);
      })
  }
}).mount('#app')