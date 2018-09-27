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
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedFunruns (state, payload) {
      state.loadedFunruns = payload
    },
    createFunrun (state, payload) {
      state.loadedFunruns.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading == payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    loadFunruns ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('funruns').once('value')
        .then((data) => {
          const funruns = []
          const obj = data.val()
          for (let key in obj) {
            funruns.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              // date: obj[key].date
            })
          }
          commit('setLoadedFunruns', funruns)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', true)
          }
        )
    },
    createFunrun ({commit}, payload) {
      const funrun = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        // date: payload.date
        }
      firebase.database().ref('funruns').push(funrun)
        .then((data) => {
          const key = data.key
          commit('createFunrun', {
            ...funrun,
            id: key
          })
        })
        .catch((error) => {
          console.log("hello", error)
        })
      // Reach out to firebase and store it
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredFunruns: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredFunruns: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    clearError ({commit}) {
      commit('clearError')
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
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
