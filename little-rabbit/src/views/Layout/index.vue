<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeaderFixed from './components/LayoutHeaderFixed.vue';
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';

const categorystore = useCategoryStore();
//pinia只在父组件进行一次请求，存储数据
onMounted(() => {
  categorystore.getCategory()
})


</script>

<template>
<!-- 引入阿里字符化图标 -->
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_5178745_fmz1a8iuevi.css">

  <LayoutHeaderFixed/>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>
