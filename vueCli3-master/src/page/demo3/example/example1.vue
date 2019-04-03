<template>
  <div class="example1">
    <p>我是新的例子里面的组件的内容1</p>
    <button @click="fathers">点击直接修改父组件内容</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    fathers() {
      this.$emit("update:demo3", parseInt(Math.random() * 10000));
    }
  }
};
</script>
<style lang="less" scoped>
.example1 {
  p {
    color: green;
  }
}
</style>


