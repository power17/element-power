import { createApp } from 'vue'

import App from './App.vue'
import ElContainer from './components/Container'

createApp(App)
	.use(ElContainer)
	.mount('#app')