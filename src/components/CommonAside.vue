<template>
  <div>
    <el-menu 
      default-active="1-4-1" 
      class="el-menu-vertical-demo" 
      @open="handleOpen" 
      @close="handleClose" 
      :collapse="isCollapse" 
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <h5>{{ isCollapse ? "后台" : "通用后台管理系统"}}</h5>
      <el-menu-item v-for="item in noChildren" :index="item.path+''" :key="item.path" @click="changeMenu(item)">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :index="item.path+''" :key="item.path">
        <template slot="title">
          <i :class="'el-icon-'+item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="(subItem, subIndex) in item.children" :key="subItem.path">
          <el-menu-item :index="subIndex+''">{{ subItem.label }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name:'CommonAside',
    data() {
      return {
        // isCollapse: false,
        menu: [
          {
            path: '/homeT',
            name: 'HomeT',
            label: '首页',
            icon: 's-home',
            // url: 'Home/Home'
          },
          {
            path: '/commodity',
            name: 'Commodity',
            label: '商品管理',
            icon: 's-goods',
            // url: 'MallManage/MallManage'
          },
          {
            path: '/userT',
            name: 'UserT',
            label: '用户管理',
            icon: 'user-solid',
            // url: 'UserManage/UserManage'
          },
          {
            label: '其他',
            icon: 's-operation',
            children: [
              {
                path: '/page1',
                name: 'page1',
                label: '其他页1',
                icon: 'setting',
                url: 'Other/PageOne'
              },
              {
                path: '/page2',
                name: 'page2',
                label: '其他页2',
                icon: 'setting',
                url: 'Other/PageTwo'
              }
            ]
          }
        ],

      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changeMenu(item){
        this.$router.push({
          name:item.name
        })
      },
      routerHome(){
        console.log(12313131)
        this.$router.push({
          name:'MainT'
        })
      },

    },
    computed:{
      noChildren() {
        // 将item进行过滤，判断有没有子项目，如果 没有子项目
        return this.menu.filter(item => !item.children)
      },
      hasChildren() {
        // 将item进行过滤，判断有没有子项目，如果 有子项目，取item下面的children
        return this.menu.filter(item => item.children)
      },
      isCollapse(){
        return this.$store.state.tab.isCollapse
      }
    },
    created(){
      console.log(this.$store.state.tab.isCollapse)
    }
  }
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu-collapse) {
    // width: 200px;
    // min-height: 100vh;
    overflow: hidden;
    height: 100vh;
  } 
.el-menu{
  height: 100%;
  border: none;
  h5{
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>