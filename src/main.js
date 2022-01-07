/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)

const windowCounterApp = createApp(App)
windowCounterApp.component('fa', FontAwesomeIcon)
windowCounterApp.mount('#app')
