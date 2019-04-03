<template>
  <div class="exam">
    我是新的例子里面的子组件
    <p>{{exams}}</p>
    <p>{{val}}</p>
    <!-- 子组件给父组件传事件 -->
    <button @click="father">点击触发父组件方法修改父组件内容</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: "我是子组件即将被修改的内容"
    };
  },
  props: ["exams"],
  methods: {
    examChange() {
      let that = this;
      that.val = "我是被修改的内容";
    },
    father() {
        // 子组件给父组件传事件
      this.$emit("changeFatherValue");
    }
  }
};
</script>
<style scoped>
p:nth-child(1) {
  color: red;
}
p:nth-child(2) {
  color: blue;
}
</style>


