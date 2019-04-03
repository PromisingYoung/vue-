<template>
    <div>
        <div>我是子组件的data:{{data}}</div>
        <div>我是子组件的data1:{{data1}}</div>
        <button @click="father">我是子组件的内容，我要触发父组件方法来修改数据</button>
        <br/>
        <button @click="fathers">我是子组件的内容，我要直接修改父组件数据</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            data:1,
            data1:'hello'
        }
    },
    created(){
        console.log(this.datas)
    },
    props:{
        datas:{
            type:String
        }
    },
    methods:{
        change(e){
            this.data1=e
        },
        father(){
            this.$emit('father',{data:123})
        },
        fathers(){
            this.$emit('update:aaa',parseInt(Math.random()*10000))
        }
    }
}
</script>

