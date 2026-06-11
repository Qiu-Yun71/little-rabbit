import { loginAPI } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useCartStore } from "@/store/cartStore.js";
import { mergeCartListApi } from "@/apis/cart";

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const cartStore = useCartStore()
    async function getUserInfo({ account, password }) {
        const response = await loginAPI({ account, password })
        userInfo.value = response.result

        await mergeCartListApi(cartStore.cartList.map((item) => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        await cartStore.updataNewList()
    }



    function clearStore() {
        userInfo.value = {}
        cartStore.clearCart()
    }
    return {
        userInfo, getUserInfo, clearStore
    }

}, {
    persist: true
})