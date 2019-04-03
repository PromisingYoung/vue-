<template>
  <div class="demo2">
    <h1>This is an about page</h1>
    <button @click="jump">点击我跳转子路由</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    jump(){
      this.$router.push({name:'demo2-1'})
    }
  }
}
</script>

