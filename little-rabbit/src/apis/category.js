import httpInstance from "@/utils/http";
export function CategoryAPI(id) {
    return httpInstance({
        url: '/category',
        params: {
            id//等价于id：id
        }
    })
}