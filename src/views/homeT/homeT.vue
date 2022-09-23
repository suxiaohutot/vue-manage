<template>
  <div>
    <el-row class="home" :gutter="24">
      <el-col :span="8" style="margin-top:20px">
        <el-card shadow="hover">
          <div class="user">
            <img :src="userImg"  class="user-img"/>
            <div class="userInfo">
              <p class="name">lirong</p>
              <p class="access">超级无敌最帅管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间：<span>2022-05-09</span></p>
            <p>上次登录地点：<span>山东</span></p>
          </div>
        </el-card>
        <el-card style="margin:20px 0 0 0 ; height: 370px">
          <el-button @click="drawEcharts">show E-charts</el-button>
        </el-card>
      </el-col>
      <el-col :span="16">
        <!-- 价格6块内容区域 -->
        <el-row>
          <el-col :span="8" v-for="item in countData" :key="item.name">
            <el-card :body-style="{ display: 'flex', padding: 0, height:'80px'}">
              <!-- :body-style="{ display: 'flex', padding: 0}" -->
              <i class="iconi" :class="item.icon" :style="{background: item.color}" ></i>
              <div class="datail">
                <p class="datail-money">￥{{item.value}}</p>
                <p>{{item.name}}</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- e-charts图标区域 -->
        <el-card style="height:250px">
          <div ref="echartsZhe" style="height:230px">
          </div>
        </el-card>
        <el-row :span="24">
          <el-col :span="12">
            <el-card style="height:200px">
              <div ref="echartsBing" style="height:200px"></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card style="height:200px">
              <div ref="echartsZhu" style="height:200px"></div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { gatData } from '@/api/data';
import axios from 'axios'
// import echarts from 'echarts'
import * as echarts from 'echarts'

export default {
  name:'HomeT',
  data() {
    return {
      userImg: require('../../assets/images/pdx.png'),
      countData:[
        {
          name:'今日支付订单',
          value:'1234',
          icon:'el-icon-success',
          color:'#2ec7c9'
        },
        {
          name:'今日收藏订单',
          value:'1234',
          icon:'el-icon-star-off',
          color:'#2ec7c9'
        },
        {
          name:'今日未支付订单',
          value:'1234',
          icon:'el-icon-goods',
          color:'#2ec7c9'
        },
        {
          name:'本月支付订单',
          value:'1234',
          icon:'el-icon-success',
          color:'#2ec7c9'
        },
        {
          name:'本月收藏订单',
          value:'1234',
          icon:'el-icon-star-off',
          color:'#2ec7c9'
        },
        {
          name:'本月未支付订单',
          value:'1234',
          icon:'el-icon-goods',
          color:'#2ec7c9'
        },
      ],
      option : {
        title: {
          text: '折线图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      option2 : {
        title: {
          text: '测试饼图',
          // subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      option3 : {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
      
    }
  },
  // 获取mock数据
  // mounted() {
  //   gatData().then(res =>{
  //     console.log(res)
  //   })
  // },
  methods:{
    getList(){
      axios({
        method:'GET',
        url:'http://localhost:3000/videoData'
      }).then((res)=>{
        console.log(res.data)
      })
    },
    drawEcharts(){
      const E1 = echarts.init(this.$refs.echartsZhe)
      E1.setOption(this.option)
      const E2 = echarts.init(this.$refs.echartsBing)
      E2.setOption(this.option2)
      const E3 = echarts.init(this.$refs.echartsZhu)
      E3.setOption(this.option3)
    }

  },
  created(){
    this.getList()
    // this.drawEcharts()
  },
  mounted(){
    this.drawEcharts()
  }

}
</script>

<style lang="less" scoped>
.user{
  /* width: 100%; */
  /* height: 50px; */
  display: flex;
  height: 100%;
  justify-content: space-between; //左右贴边
  align-content: center; //上下居中
  &-img{
    width: 100px;
    height: 100px;
    border-radius: 50%
  }
}
.name{
  font-size: 19px;
}
.access{
  font-size: 13px;
}
.login-info{
  font-size: 14px;
}
// .num{
//   width: 200px;
// }
.el-card{
  margin: 5px 10px 0 10px;
}
.iconi{
  width: 75px;
  height: 75px;
  margin: 7px 0 0 7px;
  font-size: 73px;
  color: aliceblue;
  display: flex;
  align-items: center;
}
.datail{
  font-size: 14px;
  margin: 0 0 0 15px;
  &-money{
    font-size: 19px;
  }
}
</style>