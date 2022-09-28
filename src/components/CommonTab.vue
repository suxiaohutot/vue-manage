<template>
  <div class="tab" >
    <el-tag size="small" 
      v-for="(tab, index) in tags" 
      :key="tab.name"
      :closable="tab.name !== 'HomeT'"
      :effect="($route?.name === tab?.name) ? 'dark ': 'plain' "
      @click="changeMenu(tab)"
      @close="handlClose(tab,index)"
    >
      {{ tab.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name:'CommonTab',
  data(){
    return {

    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabList
    })
  },
  methods: {
    ...mapMutations({
      close: 'closeTag'
    }),
    changeMenu(item){
      // this.$router.push({name: item.name})
      this.$router.push(item.name)
    },
    handlClose(tag, index){
      const length = this.tags.length - 1
      this.close(tag)
      if(tag.name !== this.$route.name){
        return;
      }
      if(length === index){
        this.$router.push({
          name:this.tags[index-1].name
        })
      }else{
        this.$router.push({
          name:this.tags[index].name
        })
      }
    }
  },

}
</script>

<style lang="less" scoped>
.tab{
  padding: 15px;
  .el-tag{
    margin: 0 0 0 15px;
    cursor: pointer;
  }
}
</style>