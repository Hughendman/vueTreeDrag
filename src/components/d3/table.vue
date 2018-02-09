<template>
  <div>
    <div id="drag"></div>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple buju">
          <div id="tree">
            <el-tree
              :data="data"
              @node-click="handleNodeClick"
              node-key="id"
              default-expand-all
              :default-checked-keys="[5]"
              :props="defaultProps">
            </el-tree>
          </div>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light buju">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="1"><div class="grid-content bg-purple"><div class="lab">布局列</div></div></el-col>
            <el-col :span="7">
              <div class="grid-content inp" id="layout">
                <span v-for="lay in layoutName" class="box">{{lay.name}} <span class="x" :value= "lay.id" @click="quxiao(lay.id)">x</span></span>
              </div>
            </el-col>
            <el-col :span="1"><div class="grid-content bg-purple"><div class="lab" >维度列</div></div></el-col>
            <el-col :span="7">
              <div class="grid-content inp" id="vdoing">
                <span v-for="vd in vdoingName" class="box">{{vd.name}} <span class="x" :value= "vd.id" @click="quxiao1(vd.id)">x</span></span>
              </div>
            </el-col>
            <el-col :span="1"><div class="grid-content bg-purple"><div class="lab" >统计列</div></div></el-col>
            <el-col :span="7">
              <div class="grid-content inp" id="stat">
                <span v-for="stat in statName" class="box">{{stat.name}} <span class="x" :value= "stat.id" @click="quxiao2(stat.id)">x</span></span>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="21">
              <div class="grid-content bg-purple-light">
                <pie v-if="'#icon-jiaoyiloudou'==$store.state.mse"></pie>
                <lines v-if="'#icon-duihuaqipao'==$store.state.mse"></lines>
                <rad v-if="'#icon-guojia'==$store.state.mse"></rad>
              </div>
            </el-col>
            <el-col :span="3"><div class="grid-content bg-purple"><granav></granav></div></el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
    export default {
      data() {
        return {
          name: "table",
          form:{
            col: '',
            row: '',
            statistics: ''

          },
          data: [{
            id: 1,
            label: '一级 1',
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          }, {
            id: 2,
            label: '一级 2',
            children: [{
              id: 5,
              label: '二级 2-1'
            }, {
              id: 6,
              label: '二级 2-2'
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
            }]
          }],
          defaultProps: {
            children: 'children',
            label: 'label'
          },
          dragid: '',
          dragname: '',
          mouseClick: false,
          dragIf: false,
          layoutName:[],
          vdoingName:[],
          statName:[],
        }
      },
      created(){
      },
      methods:{
        handleNodeClick(data) {//点击树返回当前选择的树的节点的信息
          console.log(data);
        },
        quxiao(id){
          let arr = [];
          for (var i =0;i<this.layoutName.length;i++){
            if(this.layoutName[i].id != id ){
              arr.push(this.layoutName[i]);
            }
          }
          this.layoutName = arr;
        },
        quxiao1(id){
          console.log(id);
          let arr = [];
          for (var i =0;i<this.vdoingName.length;i++){
            if(this.vdoingName[i].id != id ){
              arr.push(this.vdoingName[i]);
            }
          }
          this.vdoingName = arr;
        },
        quxiao2(id){
          console.log(id);
          let arr = [];
          for (var i =0;i<this.statName.length;i++){
            if(this.statName[i].id != id ){
              arr.push(this.statName[i]);
            }
          }
          this.statName = arr;
        },
        laychange(){
          console.log(1);
        }
      },
      mounted(){
        let tree = document.getElementById("tree").getBoundingClientRect();
        let treeXL = tree.x;
        let treeXR = tree.x + tree.width;
        let treeYT = tree.y;
        let treeYB = tree.y + tree.height;
        let layout = document.getElementById("layout").getBoundingClientRect();
        let layoutXL = layout.x;
        let layoutXR = layout.x + layout.width;
        let layoutYT = layout.y;
        let layoutYB = layout.y + layout.height;
        let vd = document.getElementById("vdoing").getBoundingClientRect();
        let vdXL = vd.x;
        let vdXR = vd.x + vd.width;
        let vdYT = vd.y;
        let vdYB = vd.y + vd.height;
        let stat = document.getElementById("stat").getBoundingClientRect();
        let statXL = stat.x;
        let statXR = stat.x + stat.width;
        let statYT = stat.y;
        let statYB = stat.y + stat.height;
        document.onmousemove =  (e)=> {
          if(this.dragIf){
            $('#drag').css('display',"block");
          }else{
            $('#drag').css('display',"none");
          }
          $('#drag').css('top',e.clientY-$('#drag').height()/2);
          $('#drag').css('left',e.clientX-$('#drag').width()/2);
        }
        document.onmousedown = (e)=> {
          if(e.clientX < treeXR && e.clientX > treeXL && e.clientY < treeYB && e.clientY > treeYT){
            this.dragIf = true;
            $('#drag').html(e.target.innerText);
          }
        }
        document.onmouseup = (e)=> {
          if(e.clientX < layoutXR && e.clientX > layoutXL && e.clientY < layoutYB && e.clientY > layoutYT && this.dragIf ){
            this.layoutName.push({
              id : this.layoutName.length,
              name : $('#drag').html()
            });
          }else if(e.clientX < vdXR && e.clientX > vdXL && e.clientY < vdYB && e.clientY > vdYT && this.dragIf){
            this.vdoingName.push({
              id : this.vdoingName.length,
              name : $('#drag').html()
            });
          }else if(e.clientX < statXR && e.clientX > statXL && e.clientY < statYB && e.clientY > statYT && this.dragIf){
            this.statName.push({
              id : this.statName.length,
              name : $('#drag').html()
            });
          }
          this.dragIf = false;
        }
        document.onclick = (e)=> {
          this.dragIf = false;
        }
        $('#layout').on('DOMNodeInserted',function(){
          console.log("layout");
        })
        $('#vdoing').on('DOMNodeInserted',function(){
          console.log("vdoing");
        })
        $('#stat').on('DOMNodeInserted',function(){
          console.log("stat");
        })
      }
    }
</script>

<style scoped>
  .inp{
    background-color: #fff;
  }
  .row-bg {
    background-color: #d3dce6!important;
    padding: 10px!important;
  }
  .x:hover{
    cursor: pointer;
  }
  .box {
    font-size: 12px;
    display: inline-block;
    height: 30px;
    margin-top: 3px;
    background-color: #8c8c8c;
    color: #fff;
    border-radius: 3px;
    line-height: 30px;
    margin-right: 1px;
  }
  .lab {
    height: 100%;
    width: 100%;
    text-align: center;
    line-height: 36px;
    font-size: 12px;
  }
  #drag {
    z-index: 9999;
    position: fixed;
    background-color: #2c3e50;
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 4px;
    display: none;
  }
  .box:hover {
    cursor: crosshair;
  }
  .buju {
    height:600px;
    padding: 10px;
    overflow: auto;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-tree{
    background-color: #d3dce6;
  }
</style>
