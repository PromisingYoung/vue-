<template>
  <div class="demo3">
    <p>{{demo3}}</p>
    <button @click="jump('example2')">点击跳转新的组件</button>
    <button @click="change">点击及修改子组件内容</button>
    <!-- 
        //父传子
        @exams='examVal':将examVal的值绑定到exam中传到example组件中,example组件接收exam
        //父组件触发子组件
        @ref="btncli"   :获取到子组件并将子组件方法examChange绑定,将值传过去
        //子组件触发父组件方法更改值
        @:@changeFatherValue='changeFather'  :子组件所传方法changeFatherValue 父组件方法 changeFather
        子组件所传方法绑定于注册组件Example上,触发父组件事件
        //子组件直接更父组件改值
        
    -->
    <Example :demo3.sync="demo3" :exams="examVal" ref="btncli" @changeFatherValue="changeFather"></Example>
    <Example1 :demo3.sync="demo3"></Example1>
    <router-view></router-view>
    <button @click="getUser">点击</button>
  </div>
</template>

<script>
import Example from "./example/example.vue";
import Example1 from "./example/example1.vue";
import { getList, getUser } from "@/api/index";
import $ from '@/until/common'
export default {
  data() {
    return {
      examVal: "我是父组件当中的内容",
      demo3: "我是父组件当中等着被修改的内容（任人宰割 `_`）",
      dataList: "",
      userList:[]
    };
  },
  components: {
    Example,
    Example1
  },
  methods: {
    jump(name) {
      let that = this;
      that.$router.push({ name: `${name}` });
    },
    change() {
      //触发子组件方法
      this.$refs.btncli.examChange("hi");
    },
    changeFather() {
      let that = this;
      that.demo3 = "我是被子组件出发方法修改的内容";
    },
    async getValue() {
      try {
        let { dataList } = await getList("/baasUserInfo/listUser", {
          userId: "18012813"
        });
        this["dataList"] = dataList;
      } catch (err) {
        //处理具体情况
        this["dataList"] = [];
      }
    },
    async getUser() {
        console.log(123)
      try {
        let  userList  = await getUser('users');
        this.userList= userList;
      } catch (err) {
        //处理具体情况
       
      }
      console.log(this.userList)
    }
  },
  created() {
    let that = this;
    that.getValue();
    that.getUser();
    $.setCookie("123","456");
  }
};
</script>

