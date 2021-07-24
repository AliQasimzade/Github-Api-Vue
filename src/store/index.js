import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "Ali",
    allJokes: [],
  },
  mutations: {
    setCurrentJoke(state, payload) {
      (state.name = payload), state.allJokes.push(payload);
    },
  },
  actions: {},
  modules: {},
  getters: {
    getCurrentJoke: (state) => state.name,
    getAllJokes: (state) => state.allJokes,
  },
});
