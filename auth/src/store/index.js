import { createStore } from 'vuex';
import auth from './modules/auth/index.js';
//import todo from './modules/auth/index.js';

const store = createStore({
  modules: {
    auth: auth,
//    todo: todo,
  }
});

export default store;
