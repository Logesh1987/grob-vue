import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    setupData: ""
  },
  mutations: {
    updateSetupData: (state, payload) => {
      state.setupData = payload
    }
  },
  actions: {
    getSetupData: ({ commit, state }) => {
      return Axios.get("http://localhost:3000/data").then(res => {
        commit('updateSetupData', res.data);
        return state.setupData;
      });
    },
    saveSetupData: ({commit}, payload) => {
      return Axios.post("http://localhost:3000/data", payload).then(res => {
        commit('updateSetupData', payload);
        return res;
      })
    }
  },
  getters: {},
  modules: {}
});
