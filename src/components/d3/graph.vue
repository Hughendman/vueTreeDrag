
<template>
  <el-row>
    <el-col :span="12" >
      <svg width="500" height="270">
        <g style="transform: translate(0, 10px)">
          <path :d="line" />
        </g>
      </svg>
    </el-col>
    <el-col :span="6">
      <div id="form">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>


</template>
<script>
  import * as d3 from 'd3';
  export default {
    name: 'vue-line-chart',
    data() {
      return {
        data: [99, 71, 78, 25, 36, 92],
        line: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    create() {
    },
    mounted() {
      this.calculatePath();
      $("#form").click( ()=> {
        console.log(this.form);
      });
    },
    methods: {
      getScales() {
        const x = d3.scaleTime().range([0, 430]);
        const y = d3.scaleLinear().range([210, 0]);
        d3.axisLeft().scale(x);
        d3.axisBottom().scale(y);
        x.domain(d3.extent(this.data, (d, i) => i));
        y.domain([0, d3.max(this.data, d => d)]);
        return { x, y };
      },
      calculatePath() {
        const scale = this.getScales();
        const path = d3.line()
          .x((d, i) => scale.x(i))
          .y(d => scale.y(d));
        this.line = path(this.data);
      },
      onSubmit() {
        console.log(this.form);
      }
    },
  };
</script>
<style lang="scss" scoped="" type="text/css">
  /*svg*/
  /*margin: 25px;*/
  /*path*/
  /*fill: none*/
  /*stroke: #76BF8A*/
  /*stroke-width: 3px*/
  svg{
    margin: 25px;
    background-color: #ccc;
    stroke: #76BF8A;
    fill: none;
    stroke-width: 3px

  }

</style>
