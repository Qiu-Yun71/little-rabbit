import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'
import App from './App.vue'
import router from './router'

import '@/styles/common.scss'
import { directiveLazy } from './directives'

// //测试接口函数
// import { getCategory } from './apis/testapi'
// getCategory().then(res => {
//     console.log(res)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.use(directiveLazy)
