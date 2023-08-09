import { StoreOptions } from "vuex";
interface INstate {
    baseinfo: NavStyle.INavStyle
}
export default {
    namespaced: true,

    state: {
        baseinfo: {
            realNavBarHeight: 0,
            navBarHeight: 0,
            menuBottom: 0,
            menuRight: 0,
            menuHeight: 0,
            menuWidth: 0,
            titleBarWidth: 0,
            blackBarHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            statusBarHeight: 0,
            safeArea: {}
        } as NavStyle.INavStyle
    } as INstate,
    getters: {

    },
    mutations: {
        setNavStyle(state: INstate,payload: NavStyle.INavStyle) {
            Object.assign(state.baseinfo, {...payload})
        }
    },
    actions: {

    }
} as StoreOptions<unknown>