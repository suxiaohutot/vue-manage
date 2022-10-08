<template>
  <div>
    mallT mallT mallT mallT
  </div>
</template>

<script>
export default {
  name:'mallT',
  data(){
    return {

    }
  },
  methods:{
    getLocalData(){
      let result1 = JSON.parse(localStorage.getItem('textLocal'))
      // return result1
      console.log(result1)
    }
  },
  created() {
    this.getLocalData()
  },
  
}
</script>

<style>

</style>