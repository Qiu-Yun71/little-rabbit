//订单页面接口
import httpInstance from "@/utils/http";
export function GetCheckInfoAPI() {
    return httpInstance({
        url: '/member/order/pre',
    })
}


//生成订单接口
export function createOrderAPI(data) {
    return httpInstance({
        url: '/member/order',
        method: 'POST',
        data
    })
}