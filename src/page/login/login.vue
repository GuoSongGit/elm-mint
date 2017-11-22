<template>
    <div>
        <mt-header fixed title="登录注册">
            <mt-button slot="left"><mt-button icon="back"></mt-button></mt-button>
        </mt-header>
        <div class="mgtop40">
            <form action="">
                <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
                <mt-field label="密码" placeholder="请输入密码" :type="mytype"><mt-switch v-model="value"></mt-switch></mt-field>
                <mt-field label="验证码" placeholder="请输入验证码">
                    <img src="" height="40px" width="100px">
                </mt-field>
            </form>
            <div class="padlr10 fs0-8 colred">
                <p>温馨提示:未注册过的账号，登录时自动注册</p>
                <p>注册过的用户可凭账号密码登录</p>
            </div>
            <div class="padlr10 mgtop10">
                <mt-button size="large" type="primary">登陆</mt-button>
            </div>
            <div class="padlr10 mgtop10">
                <span class='col right'>重置密码</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      value: false
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
    mytype: function () {
      return this.value ? '' : 'password'
    }
  },
  methods: {
    // 函数
  }
}
</script>
<style lang="css" scoped>
</style>