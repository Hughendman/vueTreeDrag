<template>
    <div class="charts">
      <div id="myChart" :style="{width: '1000px', height: '500px'}"></div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '级别' },
          tooltip: {},
          xAxis: {
            data: ["级别1","级别2","级别3","级别4","级别5","级别6"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    }
  }
</script>

<style scoped>

</style>
