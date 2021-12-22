import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faAt, faUser, faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope, faUser as faUserReg, faArrowAltCircleDown} from "@fortawesome/free-regular-svg-icons"

library.add([faAt, faEnvelope, faUserReg, faUser, faPlusSquare, faArrowAltCircleDown])

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store).use(router).mount('#app')
