<template>
  <div class="home">
    <el-menu :router="true" :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/table">展示</el-menu-item>
      <el-menu-item index="/form">SQL</el-menu-item>
      <el-menu-item index="/graph">图形</el-menu-item>
    </el-menu>
    <div class="bujuBigdata"></div>
    <router-view/>
  </div>
</template>

<script>
import {chackName} from '../assets/pinYIn';
export default {
  data () {
    return {
      msg: 'Home',
      activeIndex: '1',
    }
  },
  created (){
    console.log(chackName("yin","匹配"))

  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.bujuBigdata {
  height: 10px;
}
</style>
