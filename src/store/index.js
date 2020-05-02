import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import { getCurrencySymbol } from '@/utils';
import defaultData from './default-setup';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		loading: false,
		defaultSetup: defaultData,
		setupData: null,
		rewardsData: null,
		popupData: null,
		widgetData: null,
		sampleImg: null
	},
	mutations: {
		enableLoader: (state) => {
			state.loading = true;
		},
		disableLoader: (state) => {
			state.loading = false;
		},
		updateSetupData: (state, payload) => {
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
		},
		updateSampleImg: (state, payload) => {
			state.sampleImg = payload;
		}
	},
	actions: {
		getSetupData: ({ commit, state }) => {
			commit('enableLoader');
			return Axios.get(
				'https://jai.devam.pro/gr/admin/onboarding?id_shop=1307&admin_email=jayakumar@appsmav.com'
			).then((res) => {
				const tempData = res.data.data;
				tempData.points_setup.currency = getCurrencySymbol(tempData.points_setup.currency);
				commit('updateSetupData', tempData);
				commit('disableLoader');
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
			commit('enableLoader');

			//return Axios.post("https://jai.devam.pro/gr/", postData, headersData).then(res => {
			return Axios.post(
				'https://jai.devam.pro/gr/admin/onboarding?id_shop=1307&admin_email=jayakumar@appsmav.com',
				payload,
				headersData
			)
				.then((res) => {
					commit('updateSetupData', payload);
					commit('disableLoader');
					return res;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getRewardsData: ({ commit, state }) => {
			commit('enableLoader');
			return Axios.get(
				'https://jai.devam.pro/gr/admin/rewards?id_shop=1307&admin_email=jayakumar@appsmav.com'
			).then((res) => {
				commit('updateRewardsData', res.data.data);
				commit('disableLoader');
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
			commit('enableLoader');
			let result = Axios.post(
				'https://jai.devam.pro/gr/admin/rewards?id_shop=1307&admin_email=jayakumar@appsmav.com',
				payload,
				headersData
			)
				.then((res) => {
					commit('disableLoader');
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
			commit('enableLoader');
			let result = Axios.put(
				'https://jai.devam.pro/gr/admin/rewards?id_shop=1307&admin_email=jayakumar@appsmav.com',
				payload,
				headersData
			)
				.then((res) => {
					commit('disableLoader');
					return res;
				})
				.catch((err) => {
					console.log(err);
				});
			return result;
		},

		deleteReward: ({ commit, state }, id) => {
			commit('enableLoader');
			Axios.delete(
				'https://jai.devam.pro/gr/admin/rewards?id_shop=1307&admin_email=jayakumar@appsmav.com&id=' + id
			)
				.then((res) => {
					if (res.data.data.status != undefined && res.data.data.status == 'success') {
						var rewards = state.rewardsData;
						console.log(JSON.stringify(rewards));
						var myNewArray = rewards.filter(function(item) {
							return item['id'] != id;
						});
						commit('updateRewardsData', myNewArray);
						commit('disableLoader');
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getPopupData: ({ commit, state }) => {
			commit('enableLoader');
			return Axios.get(
				'https://jai.devam.pro/gr/admin/themes?id_shop=1307&admin_email=jayakumar@appsmav.com'
			).then((res) => {
				commit('updatePopupData', res.data.data);
				commit('disableLoader');
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
			commit('enableLoader');
			return Axios.put(
				'https://jai.devam.pro/gr/admin/themes?id_shop=1307&admin_email=jayakumar@appsmav.com',
				payload,
				headersData
			).then((res) => {
				commit('updatePopupData', payload);
				commit('disableLoader');
				return res;
			});
		},
		getWidgetData: ({ commit, state }) => {
			commit('enableLoader');
			return Axios.get(
				'https://jai.devam.pro/gr/admin/widgets?id_shop=1307&admin_email=jayakumar@appsmav.com'
			).then((res) => {
				//console.log("#####################################################");
				//console.log(JSON.stringify(res.data.data));
				//console.log("#####################################################");
				commit('updateWidgetData', res.data);
				commit('disableLoader');
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
			commit('enableLoader');
			return Axios.put(
				'https://jai.devam.pro/gr/admin/widgets?id_shop=1307&admin_email=jayakumar@appsmav.com',
				payload,
				headersData
			).then((res) => {
				commit('updateWidgetData', payload.data);
				commit('disableLoader');
				return res;
			});
		},
		updateLoyaltyStatus: ({ commit }, status) => {
			let headersData = {
				headers: {
					'Content-Type': 'text/plain',
					Accept: '*/*'
				}
			};
			commit('enableLoader');
			return Axios.post(
				'https://jai.devam.pro/gr/admin/onboarding/updateLoyalty?id_shop=1307&admin_email=jayakumar@appsmav.com',
				{ status: status },
				headersData
			).then((res) => {
				commit('disableLoader');
				return res;
			});
		},
		submitReview: ({ commit }, review) => {
			let headersData = {
				headers: {
					'Content-Type': 'text/plain',
					Accept: '*/*'
				}
			};
			return Axios.post(
				'https://jai.devam.pro/gr/admin/onboarding/review?id_shop=1307&admin_email=jayakumar@appsmav.com',
				review,
				headersData
			).then((res) => {
				//commit('updateWidgetData', status);
				return res;
			});
		},
		setSample: ({ commit, state }, url) => {
			commit('updateSampleImg', url);
		}
	},
	getters: {},
	modules: {}
});
