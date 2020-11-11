import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    enterArtId: 2
  },
  mutations: {
    setEnterArtId(state,id){
      state.enterArtId=id.articleId
      console.log(id.articleId)
    },


  },
  actions: {},
  modules: {}
})
