import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'
import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

// //测试接口函数
// import { getCategory } from './apis/testapi'
// getCategory().then(res => {
//     console.log(res)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//定义图片懒加载指令
app.directive('img-lazy', {
    mounted(el, binding) {
        useIntersectionObserver(el, ([{ isIntersecting }]) => {
            if (isIntersecting) {
                // 进入视口区域
                el.src = binding.value

            }
        },
        )
    }
})
