<template>
  <div id="granav">
    <el-tabs :default-active="1">
      <el-tab-pane label="常用选项" index="1">
        <!--\(^o^)/~-->
        <ul id="font">
          <li v-for="font in url" @click="changeMove(font.name)">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="font.name"></use>
            </svg>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="全部选项" index="2">全部选项</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          url: [{
            name: "#icon-jiaoyiloudou"
          },{
            name:"#icon-duihuaqipao"
          },{
            name:"#icon-guojia"
          },{
            name:"#icon-guojiapitchon"
          },{
            name:"#icon-tianqi"
          },{
            name:"#icon-tianqitubiao_qingtianbai"
          },{
            name:"#icon-dashujucunchu"
          },{
            name:"#icon-nationaarea"
          },{
            name:"#icon-map__easyicon"
          },{
            name:"#icon-leidatu"
          },{
            name:"#icon-shaloutu"
          },{
            name:"#icon-zhexiantu"
          },{
            name:"#icon-dashujufenxi"
          },{
            name:"#icon-zuzhiheguanlitubiao-"
          }]
        }
      },
      created(){


      },
      methods: {
        changeMove(name){
          this.$store.state.mse = name;
        }
      }
    }
</script>

<style scoped>
  #granav{
    background-color: #fff;
    border-radius: 4px;
    height: 500px;
  }
  svg {
    width: 35px;
    height: 35px;
  }
  #font {
    text-align: center;
  }
  #font li {
    display: inline-block;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 2px;
    background-color: #cccccc;
  }
  #font li:hover {
    cursor: pointer;
  }
</style>
