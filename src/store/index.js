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
      //console.log("#####################################################");
      //console.log(JSON.stringify(payload));
      //console.log("#####################################################");
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
      //return Axios.get("http://localhost:3000/setup").then(res => {
        //alert("TEST");
      return Axios.get("https://jai.devam.pro/gr/admin/onboarding?id_shop=1226&admin_email=jayakumar@appsmav.com").then(res => {
        commit('updateSetupData', res.data.data);
        //console.log("*****************************************************");
        //console.log(JSON.stringify(res.data.data));
        //console.log("*****************************************************");
        return res.data.data;
      });
    },
    saveSetupData: ({ commit }, payload) => {
        let headersData = {
          headers: {
              //'Access-Control-Allow-Origin': '*',
              //'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
              //'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
              'Content-Type': 'text/plain',
              'Accept': '*/*'
          }
        }

        //return Axios.post("https://jai.devam.pro/gr/", postData, headersData).then(res => {
          return Axios.post("https://jai.devam.pro/gr/admin/onboarding?id_shop=1226&admin_email=jayakumar@appsmav.com", payload, headersData).then(res => {
            commit('updateSetupData', payload);
            console.log("###############   SUCCESS   ###################");
            console.log(res);
            return res;
          }).catch(err => {
            console.log("###############   ERROR   ###################");
            console.log(err);
          });
    },
    getRewardsData: ({ commit, state }) => {
        return Axios.get("https://jai.devam.pro/gr/admin/rewards?id_shop=1226&admin_email=jayakumar@appsmav.com").then(res => {
        commit('updateRewardsData', res.data.data);
        return state.rewardsData;
      });
    },
    addReward: ({ commit }, payload) => {
      let headersData = {
        headers: {
            'Content-Type': 'text/plain',
            'Accept': '*/*'
        }
      }
      Axios.post('https://jai.devam.pro/gr/admin/rewards?id_shop=1226&admin_email=jayakumar@appsmav.com', payload, headersData).then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      }).catch(err => {
        console.log(err);
      });
    },
    updateReward: ({ commit }, payload) => {
      let headersData = {
        headers: {
            'Content-Type': 'text/plain',
            'Accept': '*/*'
        }
      }
      Axios.put('https://jai.devam.pro/gr/admin/rewards?id_shop=1226&admin_email=jayakumar@appsmav.com', payload, headersData).then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      }).catch(err => {
        console.log(err);
      });
    },
    deleteReward: ({ commit }, id) => {
      let headersData = {
        headers: {
            'Content-Type': 'text/plain',
            'Accept': '*/*'
        }
      }
      Axios.delete('https://jai.devam.pro/gr/admin/rewards?id_shop=1226&admin_email=jayakumar@appsmav.com&id='+id).then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      }).catch(err => {
        console.log(err);
      });
    },
    updateRewardStatus: ({ commit }, id) => {
      alert("DEL FUNCTION");     
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
