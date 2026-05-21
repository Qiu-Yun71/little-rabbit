import { ref, onMounted } from "vue";
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { CategoryAPI } from '@/apis/category';


export function useCategory() {
    let categoryList = ref([])
    const route = useRoute()

    async function getCategory(id) {
        const response = await CategoryAPI(id)
        categoryList.value = response.result
    }

    onMounted(() => getCategory(route.params.id))

    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })

    return {
        categoryList
    }
}