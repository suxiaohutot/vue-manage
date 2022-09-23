// mock 数据模拟
import Mock from 'mockjs'

// 图标数据
let List = []
export default {
  getStatisticalData: () =>{
    // mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
    for(let i=0; i<7; i++){
      List.push(
        Mock.Mock({
          苹果: Mock.Random.float( 100, 8000, 0, 0 ),
          vivo: Mock.Random.float( 100, 8000, 0, 0 ),
          oppo: Mock.Random.float( 100, 8000, 0, 0 ),
          魅族: Mock.Random.float( 100, 8000, 0, 0 ),
          三星: Mock.Random.float( 100, 8000, 0, 0 ),
          小米: Mock.Random.float( 100, 8000, 0, 0 )
        })
      )
    } 
    return{
      code:20000,
      data:{
        // 饼图
        videoData:[
          {
            name:'小米',
            value:2999
          },
          {
            name:'苹果',
            value:6999
          },
          {
            name:'vivo',
            value:2599
          },
          {
            name:'oppo',
            value:2899
          },
          {
            name:'魅族',
            value:2499
          },
          {
            name:'三星',
            value:4599
          },
        ],
        // 柱状图
        userData:[
          {
            data:'周一',
            new: 5,
            active: 200
          },
          {
            data:'周二',
            new: 10,
            active: 345
          },
          {
            data:'周三',
            new: 12,
            active: 278
          },
          {
            data:'周四',
            new: 20,
            active: 412
          },
          {
            data:'周五',
            new: 60,
            active: 256
          },
          {
            data:'周六',
            new: 44,
            active: 139
          },
          {
            data:'周日',
            new: 67,
            active: 581
          },
        ],
        // 折线图
        orderData:{
          date:['20191001', '20191002', '20191003', '20191004', '20191005', '20191006','20191007'],
          data: List
        },
        tableData: [
          {
            name: 'oppo',
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000
          },
          {
            name: '苹果',
            todayBuy: 600,
            monthBuy: 3500,
            totalBuy: 67000
          },
          {
            name: 'vivo',
            todayBuy: 700,
            monthBuy: 4500,
            totalBuy: 23000
          },
          {
            name: '魅族',
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 36000
          },
          {
            name: '三星',
            todayBuy: 900,
            monthBuy: 1800,
            totalBuy: 19000
          },
          {
            name: '小米',
            todayBuy: 800,
            monthBuy: 4800,
            totalBuy: 40000
          },

        ]
      }
    }
  }
}