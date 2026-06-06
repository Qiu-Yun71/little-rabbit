<script setup>
import { onMounted , ref} from 'vue';
import HomePanel from './HomePanel.vue';
// import { getNewsAPI } from '@/apis/getNew';//news接口的第一个api数据有问题，缺少了一些信息，这里用goods的api其中四项替代
import { getGoodsAPI } from '@/apis/getgoods.js';
let newList = ref([]);
async function News() {
    const response = await getGoodsAPI();
    newList.value = response.result[0].goods.slice(2,6);
}

onMounted(() => {
    News();
})

</script>

<template>
  
    <HomePanel title = "新鲜好物" sub-title = "新鲜出炉 品质靠谱">
    <ul class="goods-list">
        <li v-for="item in newList" :key="item.id">
        <RouterLink :to='`/detail/${item.id}`'>
            <img :src="item.picture" alt="" />
            <p class="name">{{ item.name }}</p>

            <p class="price">&yen;{{ item.price }}</p>

        </RouterLink>

        </li>

    </ul>
    </HomePanel>
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;//多出文字省略号显示
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
