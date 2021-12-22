import {$authHost} from "@/services/api";

export const testModule = {
    state: () => ({
        test: '', type: '', currentTest: null, questions: [], tests: []
    }), mutations: {
        setTest(state, test) {
            state.test = test
        }, setType(state, type) {
            state.type = type
        }, setCurrentTest(state, payload) {
            state.currentTest = payload
        }, setQuestions(state, question) {
            state.questions.push(question)
        }, setQuestion(state, {index, key, event}) {
            state.questions[index][key] = event
        }, setChoices(state, {index, ...rest}) {
            state.questions[index].choices.push(rest)
        }, setChoice(state, {index, choiceIndex, key, value}) {
            state.questions[index].choices[choiceIndex][key] = value
        }, setTests(state, tests) {
            state.tests = tests
        }
    }, actions: {
        async createTest({commit}, {userId, test, type, questions}) {
            commit('setLoading', true, {root: true})
            try {
                const {data} = $authHost.post(`/api/tests`, {userId, test, type, questions})
                console.log(data)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false, {root: true})
            }
        }
    }, namespaced: true
}