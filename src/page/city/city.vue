<template>
    <div>
        <mt-header :title="$store.state.nowcity.name" fixed>
            <mt-button slot="left"><mt-button icon="back"></mt-button></mt-button>
            <mt-button slot="right">切换城市</mt-button>
        </mt-header>
        <div class="mgtop50 bgfff padlr10 padbot10">
            <input class="cityinput" placeholder="输入商务楼，学校，地址">
            <div class="submit bgcol ih40">提交</div>
        </div>
        <div class="main">
            <div class="his after">
                <div class="contenttop fs0-8 padlr10">搜索历史</div>
                <div class="mainbody bgfff">
                    <div class="pad10 after">
                        <div class="ih30">长宁区</div>
                        <div class="ih30 fs0-8 col9f">长宁区中山公园</div>
                    </div>
                    <div class="clearall ih30 pad10 col9f">清空所有</div>
                </div>
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
.cityinput{
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid #eeeeee;
    outline: none;
    padding: 0 5px;
    margin: 10px 0;
    border-radius: 4px;
}
.submit{
    text-align: center;
    color: #ffffff;
    border-radius: 4px;
}
.contenttop{
    border-top:2px solid #e4e4e4;
    border-bottom:2px solid #e4e4e4;
}
.main{
    border-top: 2px solid #e4e4e4;
}
.maintop{
    border-bottom: 2px solid #e4e4e4;
}
.clearall{
    text-align: center;
}

</style>