import axios from "axios";

export default {
  async signup(_, payload) {
    await axios.post("http://localhost:5151/signup", payload);
  },

  async login(context, payload) {
    const response = await axios.post("http://localhost:5151/login", payload);
    const token = response.data.data;
    console.log(token);

    // call mutations to update token
    context.commit("setLogin", {
      token: token,
    });

    // save token into local storage
    localStorage.setItem('token', token);
  },
  tryLogin(context) {
    // get saved token from local storage
    const token = localStorage.getItem("token");

    if (token) {
      context.commit("setLogin", {
        token: token,
      });
    }
  },
  
  async logout(context) {
    const token = context.rootGetters.token;
    console.log(token);
    await axios.post("http://localhost:5151/logout", {}, {
      headers: {
        Authorization: token,
      },
    });
    localStorage.removeItem('token');
    context.commit("setLogin", {
      token: '',
    });
  },
};
