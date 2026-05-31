<script setup>
import { getHotGoodsAPI } from '@/apis/detail';
import { onMounted,ref } from 'vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const props = defineProps({
    hotType:Number,
})

// 映射对象
const TYPETITLE = {
    1: '24小时热榜',
    2: '周热榜'
    
}
const title = computed(() => TYPETITLE[props.hotType])
// - 普通函数 ：每次渲染都会执行 2 次函数调用
// - computed ：只执行 1 次，结果会被缓存复用

const route = useRoute()
let HotData = ref([])
async function getHotData() {
    const response = await getHotGoodsAPI({
    id: route.params.id,
    type: props.hotType
    })
    HotData.value = response.result
}
onMounted(() => {
    getHotData()
})
</script>


<template>
  <div class="goods-hot">
    <h3>{{title}}</h3>

    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in HotData" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{item.name}}</p>

      <p class="desc ellipsis">{{item.desc}}</p>

      <p class="price">&yen;{{item.price}}</p>

    </RouterLink>

  </div>

</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>
