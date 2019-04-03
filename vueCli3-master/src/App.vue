<template>
  <div id="app">
    <div id="nav">
      <button @click="jump('demo1')">demo1</button> |
      <button @click="jump('demo2')">demo2</button> |
      <button @click="jump('demo3')">demo2</button> 
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    jump(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
