import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import { router } from './router'
import '@/styles/global.sass'

const app = createApp(App)
const head = createHead()

app
  .use(router)
  .use(head)
  .mount('#app')