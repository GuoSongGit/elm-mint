<template>
    <div>
        <mt-header fixed title="标题">
            <span slot="left">elm</span>
            <mt-button slot="right">登陆|注册</mt-button>
        </mt-header>

        <div class="mgtop40 bgf5">
            <div class="after ih50 padlr10 box bgfff">
                <span>当前选择城市</span>
                <span class="right fs0-8 col9f">定位不准时,请在城市列表选择</span>
            </div>
            <mt-cell title="上海" class="col after"></mt-cell>
            <div class="mgtop10 bgfff">
                <mt-cell title="热门城市" class="after"></mt-cell>
                <div class="itembox ovhid col">
                    <div>上海</div><div>上海</div><div>上海</div><div>上海</div>
                    <div>上海</div><div>上海</div><div>上海</div><div>上海</div>
                    <div>上海</div><div>上海</div><div>上海</div><div>上海</div>
                </div>
            </div>
            <div class="mgtop10 bgfff">
                <mt-cell title="A" class="after"></mt-cell>
                <div class="itembox ovhid">
                    <div>上海</div><div>上海</div><div>上海</div><div>上海</div>
                    <div>上海</div><div>上海</div><div>上海</div><div>上海</div>
                    <div>上海</div><div>上海</div><div>上海</div><div>上海</div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
  data () {
    return {
      citylist: ''
    }
  },
  components: {
    // 注册组件
  },
  mounted: function () {
    // 生命周期
    this.$http.get('http://cangdu.org:8001/v1/cities?type=group').then(response => {
      this.citylist = response.body
      console.log(response)
    }, response => {
      console.log(response)
    })
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
.itembox>div{
    width: 25%;
    height: 40px;
    line-height: 40px;
    float: left;
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
}
.itembox> div:nth-child(4n){
    border-right: none
}
</style>