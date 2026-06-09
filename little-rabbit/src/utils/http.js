//axios基础封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store/userStore'
import { useRouter } from 'vue-router'

const httpInstance = axios.create({
    baseURL: '/api',
    timeout: 5000
})

//拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    ElMessage.warning({
        message: e.response.data.message
    })

    //token失效401状态码处理
    if (e.response.status === 401) {
        const userStore = useUserStore()
        userStore.clearStore()
        const router = useRouter()
        router.replace('/login')
    }
    return Promise.reject(e)
})

export default httpInstance