//订单页面接口
import httpInstance from "@/utils/http";
export function GetCheckInfoAPI() {
    return httpInstance({
        url: '/member/order/pre',
    })
}