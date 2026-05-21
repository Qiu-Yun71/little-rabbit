import { getCategoryFilterAPI } from '@/apis/category';
import { onMounted, onBeforeRouteUpdate, ref } from 'vue';
import { useRoute } from 'vue-router';

export function useCategoryFilter() {

    let filterData = ref({})
    let route = useRoute()
    async function getCategoryFilter(id) {
        const response = await getCategoryFilterAPI(id)
        filterData.value = response.result
    }


    onMounted(() => {
        getCategoryFilter(route.params.id)
    })

    onBeforeRouteUpdate((to) => {
        getCategoryFilter(to.params.id)
    })

    return { filterData }
}