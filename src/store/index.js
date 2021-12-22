import {createStore} from 'vuex'
import {userModule} from "@/store/userModule";
import {testModule} from "@/store/testModule";
import jwtDecode from "jwt-decode";

export default createStore({
    state: ()=>({
        isLoading: false
    }),
    mutations: {
        setLoading(state, bool) {
            state.isLoading = bool
        }
    },
    getters: {
      getUserId(){
          return jwtDecode(localStorage.getItem('token')).id
      }
    },
    modules: {
        user: userModule,
        test: testModule
    }
})
