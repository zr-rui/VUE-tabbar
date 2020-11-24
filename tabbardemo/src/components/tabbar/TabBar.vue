<template>
  <div id="tab-bar">
    <slot>
    </slot>
  </div>


</template>

<script>
  import TabBarItem from "./TabBarItem";
  export default {
    name: "TabBar",
    components: {TabBarItem}
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  #tab-bar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px  rgba(100,100,100,.1) ;

  }


</style>
