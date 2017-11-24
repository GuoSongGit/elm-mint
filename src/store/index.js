import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)
const state = {
  nowcity: {'name': '', 'id': ''},
  selected: 'miste'
}

export default ({
  state,
  actions,
  getters,
  mutations
})
