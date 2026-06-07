import { defineStore } from "pinia"
import { ref, computed } from "vue"

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

    //计算总数量和总价格
    const allcount = computed(() => cartList.value.reduce((add, curr) => add + curr.count, 0))
    const allprice = computed(() => cartList.value.reduce((add, curr) => add + curr.price * curr.count, 0))

    return { cartList, addCart, delCart, allcount, allprice }

}, {
    persist: true
})