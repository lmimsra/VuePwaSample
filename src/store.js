import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        important: null,
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
        // databaseInitialise: function ({commit}) {
        //
        // }
    },
    getters: {
        bingoArray: function (state) {
            if (state.bingo !== null) {
                return state.bingo
            } else {
                return state.bingo
            }
        },
        eventInfo: function (state) {
            console.log(state.info)
            return state.info
        },
        importantInfo: function (state) {
            return state.important
        }
    }
})
