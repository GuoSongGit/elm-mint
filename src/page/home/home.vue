<template>
    <div>
        <mt-header fixed title="标题">
            <span slot="left">elm</span>
            <mt-button slot="right" @click="gologin">登陆|注册</mt-button>
        </mt-header>

        <div class="mgtop40 bgf5">
            <div class="after ih50 padlr10 box bgfff">
                <span>当前选择城市</span>
                <span class="right fs0-8 col9f">定位不准时,请在城市列表选择</span>
            </div>
            <mt-cell :title="$store.state.nowcity.name" class="col after"></mt-cell>
            <div class="mgtop10 bgfff">
                <mt-cell title="热门城市" class="after"></mt-cell>
                <div class="itembox ovhid col">
                    <div v-for="item in hotcity" :key="item.key" @click="gocity({name:item.name,id:item.id})">{{item.name}}</div>
                </div>
            </div>
            <div class="mgtop10 bgfff" v-for="(items,index) in getlist" :key="index">
                <mt-cell :title="index" class="after"></mt-cell>
                <div class="itembox ovhid">
                    <div v-for="item in items" :key="item.key" class="nowarp" @click="gocity({name:item.name,id:item.id})">{{item.name}}</div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
  data () {
    return {
      nowcity: '上海',
      hotcity: '',
      citylist: ''
    }
  },
  components: {
    // 注册组件
  },
  mounted: function () {
    // 生命周期
    // 当前城市获取
    this.$http.get('http://cangdu.org:8001/v1/cities?type=guess').then(response => {
      this.$store.state.nowcity = {'name': response.body.name, 'id': response.body.id}
      console.log(response)
    }, response => {
      console.log(response)
    })
    // 热门城市获取
    this.$http.get('http://cangdu.org:8001/v1/cities?type=hot').then(response => {
      this.hotcity = response.body
      console.log(response)
    }, response => {
      console.log(response)
    })
    // 城市列表获取
    this.$http.get('http://cangdu.org:8001/v1/cities?type=group').then(response => {
      this.citylist = response.body
      console.log(response)
    }, response => {
      console.log(response)
    })
  },
  computed: {
    // 计算属性
    getlist: function () {
      var mycitylist = {}
      for (var i = 65; i < 90; i++) {
        var num = String.fromCharCode(i)
        mycitylist[num] = this.citylist[num]
      }
      return mycitylist
    }
  },
  methods: {
    // 函数
    gologin: function () {
      this.$router.push('login')
    },
    gocity: function (e) {
      this.$router.push('city')
      this.$store.state.nowcity = e
    }
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