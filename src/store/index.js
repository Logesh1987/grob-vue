import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    setupData: null,
    rewardsData: null,
    popupData: null,
    widgetData: null
  },
  mutations: {
    updateSetupData: (state, payload) => {
      state.setupData = payload
    },
    updateRewardsData: (state, payload) => {
      state.rewardsData = payload
    },
    updatePopupData: (state, payload) => {
      state.popupData = payload
    },
    updateWidgetData: (state, payload) => {
      state.widgetData = payload
    }
  },
  actions: {
    getSetupData: ({ commit, state }) => {
      return Axios.get("http://localhost:3000/setup").then(res => {
        commit('updateSetupData', res.data);
        return res.data;
      });
    },
    saveSetupData: ({ commit }, payload) => {
      return Axios.post("http://localhost:3000/setup", payload).then(res => {
        commit('updateSetupData', payload);
        return res;
      })
    },
    getRewardsData: ({ commit, state }) => {
      return Axios.get("http://localhost:3000/rewards").then(res => {
        commit('updateRewardsData', res.data);
        return state.rewardsData;
      });
    },
    getPopupData: ({ commit, state }) => {
      return Axios.get("http://localhost:3000/themes").then(res => {
        commit('updatePopupData', res.data);
        return state.popupData;
      });
    },
    savePopupData: ({commit}, payload) => {
      return Axios.post("http://localhost:3000/themes", payload).then(res => {
        commit('updatePopupData', payload);
        return res;
      })
    },
    getWidgetData: ({commit, state}) => {      
      return Axios.get("http://localhost:3000/widgets").then(res => {
        commit('updateWidgetData', res.data);
        return state.widgetData;
      });
    },
    saveWidgetData: ({commit}, payload) => {
      return Axios.post("http://localhost:3000/widgets", payload).then(res => {
        commit('updateWidgetData', payload);
        return res;
      })
    },
  },
  getters: {},
  modules: {}
});
