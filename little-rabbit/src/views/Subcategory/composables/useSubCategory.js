import { getSubCategoryAPI } from "@/apis/category"
import { onMounted, ref, watch } from "vue"
import { useRoute } from "vue-router"

export function useSubCategory() {
    let route = useRoute()
    let goodList = ref([])
    let reqData = ref({
        categoryId: route.params.id,
        page: 1,
        pageSize: 20,
        sortField: 'publishTime'
    })
    async function getSubCategory() {
        //这里记得加value，api要的是普通对象
        const response = await getSubCategoryAPI(reqData.value)
        goodList.value = response.result.items
    }
    onMounted(() => getSubCategory())
    watch(() => reqData.sortField, () => {
        reqData.page = 1//页面重置为一
        getSubCategory()
    })//监听而不是导出这个函数，在模板使用，避免暴露
    return { goodList, reqData }
}