import { useIntersectionObserver } from "@vueuse/core"
export const directiveLazy = {
    install(app) {
        //定义图片懒加载指令
        app.directive('img-lazy', {
            mounted(el, binding) {
                //这里是把stop方法从use..函数返回值解构出来，该函数返回的是一个对象，包括stop等方法
                const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
                    if (isIntersecting) {
                        // 进入视口区域
                        el.src = binding.value
                        //这样只要第一次获取后再进入不会再重复更新
                        stop()
                    }
                },
                )
            }
        })
    }
}

//补充函数写法
// export const directiveLazy = (app) => {
//     app.directive('img-lazy', { ... })
// }

// 如果传给 app.use() 的 是一个函数，Vue 会直接执行这个函数，并把 app 作为第一个参数传进去。

// 如果传给 app.use() 的 是一个对象，Vue 会查找该对象的 install 方法并执行它。