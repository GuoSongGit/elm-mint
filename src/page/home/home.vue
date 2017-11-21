<template>
    <div>
        <mt-header fixed title="标题">
            <span slot="left">elm</span>
            <mt-button slot="right">登陆|注册</mt-button>
        </mt-header>

        <div class="mgtop40">
            <div class="after ih50 padlr10 box bgfff">
                <span>当前选择城市</span>
                <span class="right fs0-8 col9f">定位不准时,请在城市列表选择</span>
            </div>
            <mt-cell title="上海" class="col after"></mt-cell>
            <div class="mgtop10 bgfff">
                <mt-cell title="热门城市" class="after"></mt-cell>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  components: {
    // 注册组件
  },
  mounted: function () {
    // 生命周期
  },
  computed: {
    // 计算属性
  },
  methods: {
    // 函数
  }
}
</script>
<style lang="css" scoped>
</style>