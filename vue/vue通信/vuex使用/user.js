const state = {
    name: "",
    todo: [],
};

const getters = {
    // getters一般是用于 store 中的 state 中派生出一些状态 例如doneTodos
    getUserNmae: (state) => state.name, // this.$store.getters.getUserNmae ==> getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的
    doneTodos: (state) => state.todo.filter((item) => item.done),
    getTodoById: (state) => (id) => {
        // 通过返回一个方法进行传参获取数据/ 在computed使用 ==> this.$store.getters.getTodoById(2)
        return state.todos.find((todo) => todo.id === id);
    },
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length;
    },
};

const mutations = {
    SET_USER(state, plylaod) {
        state.name = plylaod.name;
    },
};

const actions = {
    setUser({ commit }, data) {
        commit("SET_USER", data);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
