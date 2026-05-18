import httpInstance from "@/utils/http";
export function getHotsAPI() {
    return httpInstance({
        url: '/home/hot'
    })
}