<template>
    <div>
        <mt-tabbar v-model="$store.state.selected">
            <mt-tab-item id="miste">
                <icon slot="icon" v-bind:class="[ $store.state.selected=='miste'? 'on' : '']" name="miste"></icon>
                外卖
            </mt-tab-item>
            <mt-tab-item id="order">
                <icon slot="icon" v-bind:class="[ $store.state.selected=='order'? 'on' : '']" name="order"></icon>
                订单
            </mt-tab-item>
            <mt-tab-item id="search">
                <icon slot="icon" v-bind:class="[ $store.state.selected=='search'? 'on' : '']" name="search"></icon>
                查找
            </mt-tab-item>
            <mt-tab-item id="profile">
                <icon slot="icon" v-bind:class="[ $store.state.selected=='profile'? 'on' : '']" name="profile"></icon>
                我的
            </mt-tab-item>
        </mt-tabbar>
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
    gopage: function () {
      return this.$store.state.selected
    }
  },
  methods: {
    // 函数
  },
  watch: {
    gopage (newval, oldval) {
      this.$router.push(newval)
    }
  }
}
</script>
<style lang="css" scoped>
</style>