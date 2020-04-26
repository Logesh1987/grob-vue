import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import { getCurrencySymbol } from '@/utils';

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
			state.setupData = payload;
		},
		updateRewardsData: (state, payload) => {
			state.rewardsData = payload;
		},
		updatePopupData: (state, payload) => {
			state.popupData = payload;
		},
		updateWidgetData: (state, payload) => {
			state.widgetData = payload;
		}
	},
	actions: {
		getSetupData: ({ commit, state }) => {
			//return Axios.get("http://localhost:3000/setup").then(res => {
			//alert("TEST");
			return Axios.get(
				'https://jai.devam.pro/gr/admin/onboarding?id_shop=1300&admin_email=jayakumar@appsmav.com'
			).then((res) => {
				const tempData = res.data.data;
				tempData.points_setup.currency = getCurrencySymbol(tempData.points_setup.currency);
				commit('updateSetupData', tempData);
				//console.log("*****************************************************");
				//console.log(JSON.stringify(res.data.data));
				//console.log("*****************************************************");
				return tempData;
			});
		},
		saveSetupData: ({ commit }, payload) => {
			let headersData = {
				headers: {
					//'Access-Control-Allow-Origin': '*',
					//'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
					//'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
					'Content-Type': 'text/plain',
					Accept: '*/*'
				}
			};

			//return Axios.post("https://jai.devam.pro/gr/", postData, headersData).then(res => {
			return Axios.post(
				'https://jai.devam.pro/gr/admin/onboarding?id_shop=1300&admin_email=jayakumar@appsmav.com',
				payload,
				headersData
			)
				.then((res) => {
					commit('updateSetupData', payload);
					console.log(res);
					return res;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getRewardsData: ({ commit, state }) => {
			return Axios.get(
				'https://jai.devam.pro/gr/admin/rewards?id_shop=1300&admin_email=jayakumar@appsmav.com'
			).then((res) => {
				commit('updateRewardsData', res.data.data);
				return state.rewardsData;
			});
		},

		//Add new Reward
		addReward: ({ commit }, payload) => {
			let headersData = {
				headers: {
					'Content-Type': 'text/plain',
					Accept: '*/*'
				}
			};
			let result = Axios.post(
				'https://jai.devam.pro/gr/admin/rewards?id_shop=1300&admin_email=jayakumar@appsmav.com',
				payload,
				headersData
			)
				.then((res) => {
					return res;
				})
				.catch((err) => {
					console.log(err);
				});
			return result;
		},

		//Update Rewards
		updateReward: ({ commit }, payload) => {
			let headersData = {
				headers: {
					'Content-Type': 'text/plain',
					Accept: '*/*'
				}
			};
			let result = Axios.put(
				'https://jai.devam.pro/gr/admin/rewards?id_shop=1300&admin_email=jayakumar@appsmav.com',
				payload,
				headersData
			)
				.then((res) => {
					return res;
				})
				.catch((err) => {
					console.log(err);
				});
			return result;
		},

		deleteReward: ({ commit, state }, id) => {
			Axios.delete(
				'https://jai.devam.pro/gr/admin/rewards?id_shop=1300&admin_email=jayakumar@appsmav.com&id=' + id
			)
				.then((res) => {
					if (res.data.data.status != undefined && res.data.data.status == 'success') {
						var rewards = state.rewardsData;
						console.log(JSON.stringify(rewards));
						var myNewArray = rewards.filter(function(item) {
							return item['id'] != id;
						});
						commit('updateRewardsData', myNewArray);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getPopupData: ({ commit, state }) => {
			//return Axios.get("http://localhost:3000/themes").then(res => {
			return Axios.get(
				'https://jai.devam.pro/gr/admin/themes?id_shop=1300&admin_email=jayakumar@appsmav.com'
			).then((res) => {
				commit('updatePopupData', res.data.data);
				return state.popupData;
			});
		},
		saveThemeSettings: ({ commit }, payload) => {
			let headersData = {
				headers: {
					'Content-Type': 'text/plain',
					Accept: '*/*'
				}
			};
			return Axios.put(
				'https://jai.devam.pro/gr/admin/themes?id_shop=1300&admin_email=jayakumar@appsmav.com',
				payload,
				headersData
			).then((res) => {
				commit('updatePopupData', payload);
				return res;
			});
		},
		getWidgetData: ({ commit, state }) => {
			return Axios.get(
				'https://jai.devam.pro/gr/admin/widgets?id_shop=1300&admin_email=jayakumar@appsmav.com'
			).then((res) => {
				//console.log("#####################################################");
				//console.log(JSON.stringify(res.data.data));
				//console.log("#####################################################");
				commit('updateWidgetData', res.data);
				return state.widgetData;
			});
		},
		saveWidgetData: ({ commit }, payload) => {
			let headersData = {
				headers: {
					'Content-Type': 'text/plain',
					Accept: '*/*'
				}
			};
			return Axios.put(
				'https://jai.devam.pro/gr/admin/widgets?id_shop=1300&admin_email=jayakumar@appsmav.com',
				payload,
				headersData
			).then((res) => {
				commit('updateWidgetData', payload);
				return res;
			});
		}
	},
	getters: {},
	modules: {}
});
