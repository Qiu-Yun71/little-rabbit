import { defineStore } from "pinia"
import { ref } from "vue"

export const useCarStore = defineStore('car', () => {
    let carList = ref([]);
    function addCar(goods) {
        // 确保添加的数量至少为1，防止出现非正数
        const addCount = Math.max(1, goods.count || 1)
        const existGoods = carList.value.find(item => item.skuId === goods.skuId)
        if (existGoods) {
            existGoods.count += addCount
        } else {
            carList.value.push({
                ...goods,
                count: addCount
            })
        }
    }
    return { carList, addCar }

}, {
    persist: true
})