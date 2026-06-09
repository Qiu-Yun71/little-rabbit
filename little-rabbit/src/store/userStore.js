import { loginAPI } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue";
export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    async function getUserInfo({ account, password }) {
        const response = await loginAPI({ account, password })
        userInfo.value = response.result
    }
    function clearStore() {
        userInfo.value = {}
    }
    return {
        userInfo, getUserInfo, clearStore
    }

}, {
    persist: true
})