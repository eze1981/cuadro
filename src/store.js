import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingStatus: null,
    presence: null,
    plugins: []
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status
    },
    SET_PRESENCE_STATUS(state, presence_status) {
      state.presence = presence_status
    },
    SET_PLUGINS(state, plugins) {
      state.plugins = plugins
    }
  },
  actions: {
    loadPlugins(context) {
      context.commit('SET_LOADING_STATUS', 'loading plugins')
      context.commit('SET_PLUGINS', ['cuadro-plugin-notifications', 'cuadro-plugin-hello'])
      context.commit('SET_LOADING_STATUS', 'idle')
    }
  },
  getters: {
    installedPlugins(state) {
      return state.plugins
    }
  }
});
