import httpInstance from "@/utils/http";
export function CategoryAPI(id) {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}