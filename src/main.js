import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'
// import komponen font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import icon yang mau dipakai
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import fade from './directives/fade.js'

import { createPinia } from 'pinia'
// sweet alert
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
library.add(faUserSecret)



createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).directive('fade', fade).use(VueSweetalert2).use(createPinia()).mount('#app')
