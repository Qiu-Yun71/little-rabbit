import httpInstance from "@/utils/http";
export function getBannerAPI(params = {}) {
    const { distributionSite = '1' } = params//解构出来，并设置默认是一，为首页的轮播图  注意这个是自定义的属性名和下面那个params没有关系
    return httpInstance({
        url: 'home/banner',
        params: {
            distributionSite
        }
    })
}