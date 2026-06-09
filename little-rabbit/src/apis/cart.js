//购物车接口
import httpInstance from "@/utils/http"
// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
    return httpInstance({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

//获取购物车列表
export const findNewCartListApi = () => {
    return httpInstance({
        url: '/member/cart',
    })
}



