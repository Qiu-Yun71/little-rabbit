//封装倒计时函数
import { onBeforeMount, ref } from "vue"
import { computed } from "vue"
import dayjs from 'dayjs'

export const useCountDown = () => {
    let timer = null
    let time = ref(0)

    //格式化时间
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))

    const start = (currentTime) => {
        //注意减一时用未格式化的time，而非格式化后的结果
        time.value = currentTime
        timer = setInterval(() => {
            time.value--
        }, 1000)
    }
    onBeforeMount(() => {
        timer && clearInterval(timer)
    })
    return {
        formatTime, start
    }
}
