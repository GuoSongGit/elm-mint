<template>
    <div>
        <mt-header title="miste" fixed>
            <mt-button slot="left"><mt-button icon="search"></mt-button></mt-button>
            <mt-button slot="right">登陆|注册</mt-button>
        </mt-header>
        <div class="mgtop40 bgfff">
            miste
        </div>
        <foot></foot>
    </div>
</template>
<script>
import foot from '../../components/foot/foot'
export default {
  data () {
    return {
    }
  },
  components: {
    // 注册组件
    foot
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