import httpInstance from "@/utils/http";
export function CategoryAPI(id) {
    return httpInstance({
        url: '/category',
        params: {
            id//等价于id：id
        }
    })
}

export function getCategoryFilterAPI(id) {
    return httpInstance({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export function getSubCategoryAPI(data) {
    return httpInstance({
        method: 'POST',
        url: '/category/goods/temporary',
        data
    })
}