<script setup>
import Goodsitem from '@/components/Goodsitem/index.vue';
import { useCategoryFilter } from './composables/useCategoryfilter';
import { useSubCategory } from './composables/useSubCategory';
const { filterData } = useCategoryFilter()
const { goodList ,reqData ,disable,load} =  useSubCategory()

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>

        <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }">{{ filterData.parentName }}
        </el-breadcrumb-item>

        <el-breadcrumb-item>{{filterData.name}}</el-breadcrumb-item>

      </el-breadcrumb>

    </div>

    <div class="sub-container">
      <el-tabs v-model="reqData.sortField"> 
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>

        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>

        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>

      </el-tabs>

      <!-- v-infinite-scroll是eplus指令，表示到最底端时执行的函数 -->
       <!-- :infinite-scroll-disabled表示是否禁用无限滚动 -->
      <div class="body" v-infinite-scroll = 'load' :infinite-scroll-disabled ='disable'>
         <!-- 商品列表-->
          <Goodsitem  v-for="good in goodList"  :good = 'good' :key = 'good.id'/>
        
      </div>

    </div>

  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>
