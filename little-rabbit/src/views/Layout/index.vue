<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeaderFixed from './components/LayoutHeaderFixed.vue';
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
