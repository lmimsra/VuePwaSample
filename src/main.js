import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCoffee, faUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {authConfig} from './config/firebaseConfig'
import firebase from 'firebase'

library.add(faCoffee,faUser);
Vue.component('font-awesome-icon',FontAwesomeIcon);
Vue.config.productionTip = false;
firebase.initializeApp(authConfig);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
