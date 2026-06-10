import { loginAPI } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useCartStore } from "@/store/cartStore.js";
export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    async function getUserInfo({ account, password }) {
        const response = await loginAPI({ account, password })
        userInfo.value = response.result
    }
    function clearStore() {
        userInfo.value = {}
        const cartStore = useCartStore()
        cartStore.clearCart()
    }
    return {
        userInfo, getUserInfo, clearStore
    }

}, {
    persist: true
})