import httpInstance from "@/utils/http";
export function getNewsAPI() {
    return httpInstance({
        url: '/home/new'
    })
}