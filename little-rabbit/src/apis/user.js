import httpInstance from "@/utils/http";

// 封装和用户有关的接口函数
export function loginAPI({ account, password }) {
    return httpInstance({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    }
    )
}