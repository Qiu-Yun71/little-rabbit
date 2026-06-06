import { defineStore } from "pinia"
import { ref } from "vue"

export const useCartStore = defineStore('cart', () => {
    let cartList = ref([]);
    function addCart(goods) {
        const addCount = Math.max(1, goods.count || 1)
        const existGoods = cartList.value.find(item => item.skuId === goods.skuId)
        if (existGoods) {
            existGoods.count += addCount
        } else {
            cartList.value.push({
                ...goods,
                count: addCount
            })
        }
    }
    function delCart(skuId) {
        const idx = cartList.value.findIndex((item) => item.skuId === skuId)
        cartList.value.splice(idx, 1)
    }
    return { cartList, addCart, delCart }

}, {
    persist: true
})