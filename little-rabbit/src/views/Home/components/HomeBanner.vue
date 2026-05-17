<script setup>
import { getBannerAPI } from '@/apis/getBanner';
import { ref, onMounted } from 'vue';

const banner = ref([]);
async function getBanner() {
    const response = await getBannerAPI();
    banner.value = response.result;
    // console.log(banner.value);

}

onMounted(() => getBanner());
</script>



<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in banner" :key="item.id">
        <img :src="item.imgUrl">
      </el-carousel-item>

    </el-carousel>

  </div>

</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
