import { getSubCategoryAPI } from "@/apis/category"
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"

export function useSubCategory() {
    let route = useRoute()
    let goodList = ref([])
    let reqData = {
        categoryId: route.params.id,
        page: 1,
        pageSize: 20,
        sortField: 'publishTime'
    }
    async function getSubCategory() {
        const response = await getSubCategoryAPI(reqData)
        goodList.value = response.result.items
    }
    onMounted(() => getSubCategory())
    return { goodList }
}