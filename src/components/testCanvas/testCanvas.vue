<template>
  <div>
    <div id="can"></div>
    <div id="can1"></div>
    <div id="can2"></div>
    <el-button type="primary"><div @click="generator">点击执行generator</div></el-button>
  </div>
  <!--<iframe id="container" src="../../assets/tuxing/说明.html" frameborder="0"></iframe>-->
</template>

<script>
    export default {
        name: "testCanvas",
        created(){
        },
        mounted(){
          function  maopao(arr) {
            for(let i=0; i<arr.length; i++){
              for(let j=i+1; j<arr.length; j++){
                if(arr[i]<arr[j]){
                  let tmp = arr[i];
                  arr[i] = arr[j];
                  arr[j] = tmp;
                }
              }
            }
            return arr;
          }
          let arr = maopao([1,45,12,5,43,6765,324,234,556,4]);
          arr.unshift("冒泡排序");
          let str = arr.join(">>>");
          $("#can").html(str);
          function  quicksort(arr) {
            if(arr.length <=1){
              return arr;
            }
            let len = Math.floor(arr.length/2);
            let flag = arr.splice(len,1)[0];
            let left=[],right = [];
            for(let i=0; i<arr.length; i++){
              if(flag<arr[i]){
                right.push(arr[i]);
              }else {
                left.push(arr[i]);
              }
            }
            return quicksort(left).concat([flag],quicksort(right));
          }
          let arr1 = quicksort([12,4,2,1,55,7,324,7,68,7642]);
          arr1.unshift("快速排序");
          let str1 = arr1.join("<<<");
          $("#can1").html(str1);
          (function () {
            $("#can2").html("匿名函数的使用");
          })();
          async function yiBu() {
            return 123;
          }
          async function time() {
            await function () {
              setTimeout(function () {
              },1000);
            };
            await  function () {
              setTimeout(function () {
              },1000);
            };
          }
          time().then(x => {});
        },
        methods:{
          generator(){
            function* gen(x){
              var y = yield x + 2;
              console.log(y);
            }

            var g = gen(1);
            g.next();
            g.next();
          }
        }
    }
</script>

<style scoped>
    #container {
      width: 100%;
      height: 780px;
      background:#000;
    }
</style>
