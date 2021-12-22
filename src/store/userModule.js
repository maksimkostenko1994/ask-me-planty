import {$authHost, $host} from "@/services/api";

export const userModule = {
    state: () => ({
        user: null,
        isAuth: false,
        error: null
    }),
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        logout(state) {
            state.user = null
        },
        setAuth(state, auth) {
            state.isAuth = auth
        },
        setError(state, error) {
            state.error = error
        }
    },
    actions: {
        async registration({commit}, {full_name, email, password}) {
            commit('setLoading', true, {root: true})
            try {
                const {data} = await $host.post(`/api/users/registration`, {full_name, email, password})
                localStorage.setItem('token', data.token)
                commit('setUser', data.user)
                commit('setAuth', true)
            } catch ({response}) {
                const error = {message: response.data.message, status: response.status}
                commit('setError', {...error})
            } finally {
                commit('setLoading', false, {root: true})
            }
        },
        async login({commit}, {email, password}) {
            commit('setLoading', true, {root: true})
            try {
                const {data} = await $host.post(`/api/users/login`, {email, password})
                localStorage.setItem('token', data.token)
                commit('setUser', data.user)
                commit('setAuth', true)
            } catch ({response}) {
                const error = {message: response.data.message, status: response.status}
                commit('setError', {...error})
            } finally {
                commit('setLoading', false, {root: true})
            }
        },
        async check({commit}) {
            commit('setLoading', true, {root: true})
            try {
                const {data} = await $authHost.get(`/api/users/auth`);
                localStorage.setItem("token", data.token);
                commit('setAuth', true)
                commit('setUser', data.user)
            } catch ({response}) {
                if (response.status === 401) localStorage.removeItem("token");
                const error = {message: response.data.message, status: response.status}
                commit('setError', {...error})
            } finally {
                commit('setLoading', false, {root: true})
            }
        },
        logout({commit}) {
            localStorage.removeItem('token')
            commit('setAuth', false)
            commit('setUser', null)
        }
    },
    namespaced: true
}