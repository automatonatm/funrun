import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedFunruns: [
        {
          imageUrl: 'https://farm5.staticflickr.com/4728/25523344408_88d90c85b7_k_d.jpg',
          id: 'asdf12345asdf',
          title: 'Funrun in London',
          date: new Date(),
          location: 'London',
          description: 'Tired of London, tired of life'
        },
        {
          imageUrl: 'https://farm5.staticflickr.com/4414/36574024414_977fb861c2_k_d.jpg',
          id: 'asdf098765432asdf',
          title: 'Funrun in Berlin',
          date: new Date(),
          location: 'Berlin',
          description: 'I like bears'
        }
    ],
    user: null

  },
  mutations: {
    createFunrun (state, payload) {
      state.loadedFunruns.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    createFunrun ({commit}, payload) {
      const funrun = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: '4567ujhgfder4567'
      }
      // Reach out to firebase and store it
      commit('createFunrun', funrun)
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredFunruns: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredFunruns: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    }
  },
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
    },
    user (state) {
      return state.user
    }
  }
})
