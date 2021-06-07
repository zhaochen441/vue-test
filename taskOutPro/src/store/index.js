import Vuex from "vuex"
import Vue from "vue"
import actions from './actions';
import mutations from './mutations'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{

    },
    getters:{

    },
    mutations,
    actions
})

export default store