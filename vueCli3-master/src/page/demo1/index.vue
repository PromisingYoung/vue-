<template>
  <div class="demo1">
    <img
      alt="Vue logo"
      src="@/assets/logo.png"
    >
    <div>我是父组件的data:{{data}}</div>
    <button @click="change">触发子组件方法或修改子组件数据</button>
    <demo :data.sync='data' @father='father' ref="button" :datas='data2'></demo>
  </div>
</template>

<script>
import demo from './compoents/demo.vue'
export default {
  name: 'demo1',
  data() {
    return {
      data: 3,
      data2:'fffffff'
    }
  },
  components: {
    demo
  },
  methods: {
    //调用子组件方法，或者修改子组件数据
    change() {
      if (this.$refs.button.data == 4) {
        this.$refs.button.data = 1
        this.$refs.button.change('hello')
        return
      }
      this.$refs.button.data = 4
      this.$refs.button.change('hi')
    },
    //接受子组件的调用
    father({data}){
      this.data=this.data===data?1:data
    }
  }
}
</script>
