import Vue from 'vue';
import Vuex from 'vuex';
import user, { State as UserState } from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
    },
});

export interface State {
    user: UserState;
}
