import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedFunruns: [
        {
          imageUrl: 'https://farm5.staticflickr.com/4728/25523344408_88d90c85b7_k_d.jpg',
          id: 'asdf12345asdf',
          title: 'Funrun in London',
          date: '2018-09-25'
        },
        {
          imageUrl: 'https://farm5.staticflickr.com/4414/36574024414_977fb861c2_k_d.jpg',
          id: 'asdf098765432asdf',
          title: 'Funrun in Berlin',
          date: '2018-10-25'
        }
    ],
    user: {
      id: '2345678ihgfdsxcvbnmki87654',
      registeredFunruns: ['asdf098765432asdf']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedFunruns (state) {
      return state.loadedFunruns.sort((funrunA, funrunB) => {
        return funrunA.date > funrunB.date
      })
    },
    featuredFunruns (state, getters) {
      return getters.loadedFunruns.slice(0, 5)
    },
    loadedFunrun (state) {
      return (funrunId) => {
        return state.loadedFunruns.find((funrun) => {
          return funrun.id === funrunId
        })
      }
    }
  }
})
