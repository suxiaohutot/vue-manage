import axios from './axios'

export const getMenu = (param) =>{
  return axios.request({
    url: '/permission/getMenu',
    method: 'post',
    data: param
  })
}

export const gatData = () =>{
  return axios.request({
    url: '/home/getData'
  })
}