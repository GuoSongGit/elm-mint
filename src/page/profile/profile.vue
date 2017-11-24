<template>
    <div>
        <mt-header title="profile" fixed>
            <mt-button slot="left"><mt-button icon="search"></mt-button></mt-button>
            <mt-button slot="right">登陆|注册</mt-button>
        </mt-header>
        <div class="mgtop40 bgfff">
            profile
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
    gopage: function () {
      return this.$store.state.selected
    }
  },
  watch: {
    // 事件监听
    gopage (newval, oldval) {
      this.$router.push(newval)
      console.log(newval)
    }
  },
  methods: {
    // 函数
  }
}
</script>
<style lang="css" scoped>
</style>