/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
import VueGtag from 'vue-gtag'

const windowCounterApp = createApp(App)
windowCounterApp.use(VueGtag, {
  config: { id: 'G-9K2MVBLC30' }
})
windowCounterApp.component('fa', FontAwesomeIcon)
windowCounterApp.mount('#app')
