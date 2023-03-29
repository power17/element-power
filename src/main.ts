import { createApp } from 'vue'

import App from './App.vue'

import ElContainer from './components/Container/index.js'

createApp(App)
	.use(ElContainer)
	.mount('#app')
