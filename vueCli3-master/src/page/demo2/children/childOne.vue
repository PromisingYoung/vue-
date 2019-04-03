<template>
  <div>
    <div
      v-for="item in dataLists"
      :key='item.id'
    >{{item.name}}</div>

  </div>
</template>
<script>
import { getCompanyList } from '@/api/index'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      dataList: [],
      pagination: {
        page: 0,
        size: 10
      }
    }
  },
  computed: {
    //辅助函数用法
    //state
    // ...mapState({
    //   data: state => state.user.data
    // }),
    //getters
    // ...mapGetters({
    //   datas: 'user/datas'
    // }),
    //payConfig字段如果为空,那么不显示
    dataLists() {
      return this.dataList.filter(item => item.payConfig)
    }
  },
  created() {
    //局部调用 基础用法
    // this.$store.state.user.data
    // this.$store.getters['user/datas']
    // this.$store.commit('user/change',{a:1,b:2});
    // this.$store.dispatch('user/change',{a:20});

    //全局调用 基础用法
    // console.log(this.$store.state.global.data)
    // console.log(this.$store.getters['datas'])
    // this.$store.commit('change', { a: 1, b: 2 });
    // this.$store.dispatch('change',{a:20});

    //辅助函数用法
    // this.data
    // this.datas
    // this.change({a:1,b:2})
    // this.changes({a:20})

    this.getCompanyList()
  },
  methods: {
    //辅助函数用法
    //mutations
    // ...mapMutations({
    //   change: "user/change"
    // }),

    //actions
    ...mapActions({
      changes: 'user/change'
    }),
    //获取公司列表
    async getCompanyList() {
      try {
        let { dataList } = await getCompanyList(this.pagination)
        this['dataList'] = dataList
      }
      //处理具体情况
      catch (err) {
        this['dataList'] = []
      }
      console.log(this.dataList)
    }
  }
}

</script>

