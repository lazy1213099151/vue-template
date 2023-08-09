import Vue from 'vue'
import Vuex from 'vuex'
import navStyle from './modules/navStyle'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        navStyle,
    }
})