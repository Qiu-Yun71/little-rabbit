import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/home';

export const useCategoryStore = defineStore('category', () => {
    let currentList = ref([]);
    async function getCategory() {
        const response = await getCategoryAPI();
        currentList.value = response.result;

    }
    return { currentList, getCategory }
})
