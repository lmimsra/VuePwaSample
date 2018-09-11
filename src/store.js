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
    actions: {},
    getters: {
        bingoArray: function (state) {
            //ビンゴの値がある場合配列に入れて反転
            if (state.bingo !== null) {
                var num_array = new Array()
                for (var index in state.bingo) {
                    num_array.push(state.bingo[index])
                }
                return num_array.reverse()
            } else {
                return state.bingo
            }
        },
        eventInfo: function (state) {
            //infoがある場合配列に代入して反転
            if (state.info !== null) {
                var info_array = new Array()
                for (var index in state.info) {
                    info_array.push(state.info[index])
                }
                return info_array.reverse()
            } else {
                return state.info
            }
        },
        importantInfo: function (state) {
            return state.important
        }
    }
})
