// 用插件对components组件全局注册
import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'
export const componentPlugin = {
    install(app) {
        // app.component('组件名字(自定义的字符串)'，组件配置对象(import时的名字))
        app.component('XtxImageView', ImageView)
        app.component('XtxSku', Sku)
    }
}