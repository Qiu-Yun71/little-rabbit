import { ref, onMounted } from "vue";
import { getBannerAPI } from '@/apis/getBanner';


export function usebanner() {
    const banner = ref([]);
    async function getBanner() {
        const response = await getBannerAPI({ distributionSite: '2' });
        banner.value = response.result;

    }

    onMounted(() => getBanner());

    return {
        banner
    }
}