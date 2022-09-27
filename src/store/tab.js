export default {
  state:{
    isCollapse: false,
    //面包屑
    tabList:[
      {
        path:'/',
        name:'HomeT',
        label:'首页',
        icon:'home'
      }
    ],
    // 记录当前选中的 面包屑 高亮
    currentMenu:null
  },
  mutations:{
    collapseMenu(state){
      state.isCollapse = !state.isCollapse
    },
    selectMenu(state, val){
      console.log('selectMenu state val')
      if(val.name != 'home'){
        state.currentMenu = val
        const result = state.tabList.findIndex(item => item.name === val.name) 
        console.log(result)
        if(result === -1){
          state.tabList.push(val)
        }
      }else{
        state.currentMenu = true
      }
    },
    closeTag(state, val){
      const result = state.tabList.findIndex(item => item.name === val.name)
      state.tabList.splice(result,1)
    }
  }
}