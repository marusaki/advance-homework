const App = Vue.createApp({
  data() {
    return {
      todoName: "",
      todoDescription:"",
      todos: [],
    };
  },

  methods: {
    addTodo() {
      if (this.todoName == '') {
        alert("Please enter TodoName");
        return;
      }
      this.todos.push({tname:this.todoName, tdescription:this.todoDescription});
    },
    removeTodo: function(index) {
      this.todos.splice(index, 1);
    }
  }
});

App.mount('#content');
