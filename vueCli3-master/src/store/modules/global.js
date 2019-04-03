const global = {
    state: {
        data: 123
    },
    getters: {
        datas: state => {
            return 4444
        }
    },
    mutations: {
        change(state, e) {
            console.log(state)
            console.log(e)
        }
    },
    actions: {
        change({ commit, state }, args) {
            commit('change', args)
        }
    }
}
export default global