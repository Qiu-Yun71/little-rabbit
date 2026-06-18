import httpInstance from "@/utils/http";

export function getBannerAPI(params = {}) {
    const { distributionSite = '1' } = params
    return httpInstance({
        url: 'home/banner',
        params: {
            distributionSite
        }
    })
}

export function getCategoryAPI() {
    return httpInstance({
        url: '/home/category/head'
    })
}

export function getHotsAPI() {
    return httpInstance({
        url: '/home/hot'
    })
}

export function getNewsAPI() {
    return httpInstance({
        url: '/home/new'
    })
}

export function getGoodsAPI() {
    return httpInstance({
        url: '/home/goods'
    })
}
