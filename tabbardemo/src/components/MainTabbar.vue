<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/home3.svg" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/tabbar-active/home3.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item >
    <tab-bar-item path="/cate" >
      <img slot="item-icon" src="../assets/img/tabbar/integral.svg" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/tabbar-active/integral.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item  path="/cart">
      <img slot="item-icon" src="../assets/img/tabbar/cart-full.svg" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/tabbar-active/cart-full.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="../assets/img/tabbar/bussiness-man.svg" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/tabbar-active/bussiness-man.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
  import TabBar from "../components/tabbar/TabBar";
  import TabBarItem from "../components/tabbar/TabBarItem";

  export default {
    name: "MainTabbar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
