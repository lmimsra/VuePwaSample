import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        info: null,
        bingo: null
    },
    mutations: {
        INITIAL_SET(state, dbData) {
            state.bingo = dbData.bingo
            state.info = dbData.info
        }
    },
    actions: {
        databaseInitialise: function ({commit}) {
            const db = firebase.database().ref('/')
            db.on('value', snapshot => {
                commit('INITIAL_SET', snapshot.val())
            })
        }
    },
    getters: {
        bingoNumber:function (state) {
            return state.bingo
        },
        eventInfo:function (state) {
            return state.info
        }
    }
})
