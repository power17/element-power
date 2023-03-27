import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import ElContainer from './components/container'

createApp(App)
	.use(ElContainer)
	.mount('#app')
