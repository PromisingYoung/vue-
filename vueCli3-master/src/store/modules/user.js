export const user = {
    namespaced: true,
    state: {
        data: [
            { id: 1, title: '裤子', flag: false },
            { id: 2, title: '袜子', flag: true },
            { id: 3, title: '衣服', flag: true }]
    },
    getters: {
        datas: state => {
            return state.data.filter(item => item.flag)
        }
    },
    mutations: {
        change(state, e) {
            console.log(e)
            state.data.forEach(item => item.flag = !item.flag)
        }
    },
    actions: {
        change({ commit, state }, args) {
            commit('change')
        }
    } 
}