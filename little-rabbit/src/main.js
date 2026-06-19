import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useIntersectionObserver } from '@vueuse/core'
import { inject as injectAnalytics } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import '@/styles/common.scss'
import { directiveLazy } from './directives'
import { componentPlugin } from '@/components'

// //测试接口函数
// import { getCategory } from './apis/testapi'
// getCategory().then(res => {
//     console.log(res)
// })

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.use(router)

app.mount('#app')

app.use(directiveLazy)
app.use(componentPlugin)

injectAnalytics()
injectSpeedInsights()
