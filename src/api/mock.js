import Mock from 'mockjs'
import homeApi from './mockServerData/home'

Mock.Mock('/home/getData', homeApi.getStatisticalData)