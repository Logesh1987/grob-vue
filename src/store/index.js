import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import { getCurrencySymbol } from '@/utils';
import defaultData from './default-setup';

Vue.use(Vuex);

const headersData = {
	headers: {
		'Content-Type': 'text/plain',
		Accept: '*/*'
	}
};
const commonMessage = 'Something went wrong';

export default new Vuex.Store({
	state: {
		loading: false,
		defaultSetup: defaultData,
		setupData: null,
		rewardsData: null,
		rewardImages: null,
		popupData: null,
		widgetData: null,
		widgetIcons: null,
		sampleImg: null,
		commonError: null
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
		updateRewardImages: (state, payload) => {
			state.rewardImages = payload;
		},
		updatePopupData: (state, payload) => {
			state.popupData = payload;
		},
		updateWidgetData: (state, payload) => {
			state.widgetData = payload;
		},
		updateWidgetIcons: (state, payload) => {
			state.widgetIcons = payload;
		},
		updateSampleImg: (state, payload) => {
			state.sampleImg = payload;
		},
		updateCommonError: (state, payload) => {
			state.commonError = payload;
		}
	},
	actions: {
		getSetupData: ({ commit, state }) => {
			commit('enableLoader');
			return Axios.get('https://jai.devam.pro/gr/admin/onboarding?id_shop=1316&admin_email=jayakumar@appsmav.com')
				.then((res) => {
					const tempData = res.data.data;
					tempData.points_setup.currency = getCurrencySymbol(tempData.points_setup.currency);
					commit('updateSetupData', tempData);
					commit('disableLoader');
					//console.log("*****************************************************");
					//console.log(JSON.stringify(res.data.data));
					//console.log("*****************************************************");
					return tempData;
				})
				.catch((err) => {
					commit('updateCommonError', err.message ? err.message : commonMessage);
				});
		},
		saveSetupData: ({ commit }, payload) => {
			commit('enableLoader');

			//return Axios.post("https://jai.devam.pro/gr/", postData, headersData).then(res => {
			return Axios.post(
				'https://jai.devam.pro/gr/admin/onboarding?id_shop=1316&admin_email=jayakumar@appsmav.com',
				payload,
				headersData
			)
				.then((res) => {
					commit('updateSetupData', payload);
					commit('disableLoader');
					return res;
				})
				.catch((err) => {
					commit('updateCommonError', err.message ? err.message : commonMessage);
				});
		},
		savePartialSetup: ({ commit, state }, payload) => {
			const currentKey = Object.keys(payload)[0];
			const stateKeys = Object.keys(state.setupData);
			return stateKeys.forEach((key) => {
				if (Object.keys(state.setupData[key]).includes(currentKey)) {
					const partialLoad = {
						[key]: payload
					};
					return Axios.post(
						'https://jai.devam.pro/gr/admin/onboarding?id_shop=1316&admin_email=jayakumar@appsmav.com',
						partialLoad,
						headersData
					)
						.then((res) => {
							return payload;
						})
						.catch((err) => {
							commit('updateCommonError', err.message ? err.message : commonMessage);
						});
				}
			});
		},
		getRewardsData: ({ commit, state }) => {
			commit('enableLoader');
			return Axios.get('https://jai.devam.pro/gr/admin/rewards?id_shop=1316&admin_email=jayakumar@appsmav.com')
				.then((res) => {
					commit('updateRewardsData', res.data.data);
					commit('updateRewardImages', res.data.images);
					commit('disableLoader');
					return state.rewardsData;
				})
				.catch((err) => {
					commit('updateCommonError', err.message ? err.message : commonMessage);
				});
		},

		//Add new Reward
		addReward: ({ commit }, payload) => {
			commit('enableLoader');
			let result = Axios.post(
				'https://jai.devam.pro/gr/admin/rewards?id_shop=1316&admin_email=jayakumar@appsmav.com',
				payload,
				headersData
			)
				.then((res) => {
					commit('disableLoader');
					return res;
				})
				.catch((err) => {
					commit('updateCommonError', err.message ? err.message : commonMessage);
				});
			return result;
		},

		//Update Rewards
		updateReward: ({ commit }, payload) => {
			commit('enableLoader');
			let result = Axios.put(
				'https://jai.devam.pro/gr/admin/rewards?id_shop=1316&admin_email=jayakumar@appsmav.com',
				payload,
				headersData
			)
				.then((res) => {
					commit('disableLoader');
					return res;
				})
				.catch((err) => {
					commit('updateCommonError', err.message ? err.message : commonMessage);
				});
			return result;
		},

		deleteReward: ({ commit, state }, id) => {
			commit('enableLoader');
			Axios.delete(
				'https://jai.devam.pro/gr/admin/rewards?id_shop=1316&admin_email=jayakumar@appsmav.com&id=' + id
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
					commit('updateCommonError', err.message ? err.message : commonMessage);
				});
		},
		getPopupData: ({ commit, state }) => {
			commit('enableLoader');
			return Axios.get('https://jai.devam.pro/gr/admin/themes?id_shop=1316&admin_email=jayakumar@appsmav.com')
				.then((res) => {
					commit('updatePopupData', res.data.data);
					commit('disableLoader');
					return state.popupData;
				})
				.catch((err) => {
					commit('updateCommonError', err.message ? err.message : commonMessage);
				});
		},
		saveThemeSettings: ({ commit }, payload) => {
			commit('enableLoader');
			return Axios.put(
				'https://jai.devam.pro/gr/admin/themes?id_shop=1316&admin_email=jayakumar@appsmav.com',
				payload,
				headersData
			)
				.then((res) => {
					commit('updatePopupData', payload);
					commit('disableLoader');
					return res;
				})
				.catch((err) => {
					commit('updateCommonError', err.message ? err.message : commonMessage);
				});
		},
		getWidgetData: ({ commit, state }) => {
			commit('enableLoader');
			return Axios.get('https://jai.devam.pro/gr/admin/widgets?id_shop=1316&admin_email=jayakumar@appsmav.com')
				.then((res) => {
					commit('updateWidgetData', res.data);
					commit('updateWidgetIcons', res.data.icons);
					commit('disableLoader');
					return state.widgetData;
				})
				.catch((err) => {
					commit('updateCommonError', err.message ? err.message : commonMessage);
				});
		},
		saveWidgetData: ({ commit }, payload) => {
			commit('enableLoader');
			return Axios.put(
				'https://jai.devam.pro/gr/admin/widgets?id_shop=1316&admin_email=jayakumar@appsmav.com',
				payload,
				headersData
			)
				.then((res) => {
					commit('updateWidgetData', payload.data);
					commit('disableLoader');
					return res;
				})
				.catch((err) => {
					commit('updateCommonError', err.message ? err.message : commonMessage);
				});
		},
		updateLoyaltyStatus: ({ commit }, status) => {
			commit('enableLoader');
			return Axios.post(
				'https://jai.devam.pro/gr/admin/onboarding/updateLoyalty?id_shop=1316&admin_email=jayakumar@appsmav.com',
				{ status: status },
				headersData
			)
				.then((res) => {
					commit('disableLoader');
					return res;
				})
				.catch((err) => {
					commit('updateCommonError', err.message ? err.message : commonMessage);
				});
		},
		submitReview: ({ commit }, review) => {
			return Axios.post(
				'https://jai.devam.pro/gr/admin/onboarding/review?id_shop=1316&admin_email=jayakumar@appsmav.com',
				review,
				headersData
			)
				.then((res) => {
					//commit('updateWidgetData', status);
					return res;
				})
				.catch((err) => {
					commit('updateCommonError', err.message ? err.message : commonMessage);
				});
		},
		setSample: ({ commit, state }, url) => {
			commit('updateSampleImg', url);
		},
		setCommonError: ({ commit }, msg) => {
			commit('updateCommonError', msg);
		}
	},
	getters: {},
	modules: {}
});
