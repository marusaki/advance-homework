import axios from "axios";

export default {
  async getTodos(context) {
    const token = context.rootGetters.token;
    const response = await axios.get("http://localhost:5151/todos", {
      headers: {
        Authorization: token,
      },
    });

    const todos = response.data.data;
    context.commit("setTodos", {
      todos: todos,
    });
    console.log(todos);
  },
};
