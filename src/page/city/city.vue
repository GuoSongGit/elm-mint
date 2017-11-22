<template>
    <div>
        <mt-header :title="$store.state.nowcity.name" fixed>
            <mt-button slot="left"><mt-button icon="back"></mt-button></mt-button>
            <mt-button slot="right">切换城市</mt-button>
        </mt-header>
        <div class="mgtop50 bgfff padlr10 padbot10">
            <input class="cityinput" placeholder="输入商务楼，学校，地址" v-model="inputval">
            <div class="submit bgcol ih40" @click="searchcity">提交</div>
        </div>
        <div class="main">
            <div v-if="list==''" class="his after">
                <div class="contenttop fs0-8 padlr10">搜索历史</div>
                <div class="mainbody bgfff" v-if="his!=''" v-for="item in his" :key="item.key">
                    <div class="pad10 after">
                        <div class="ih30">{{item.name}}</div>
                        <div class="ih30 fs0-8 col9f">{{item.address}}</div>
                    </div>
                    <div class="clearall ih30 pad10 col9f"  @click="removeall">清空所有</div>
                </div>
            </div>
            <div class="search bgfff">
                <div class="pad10 after" @click="goaddress({name:item.name,latitude:item.latitude,longitude:item.longitude,address:item.address,geohash:item.geohash})" v-for="item in list" :key="item.key">
                    <div class="ih30">{{item.name}}</div>
                    <div class="ih30 fs0-8 col9f">{{item.address}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      list: '',
      inputval: '',
      his: ''
    }
  },
  components: {
    // 注册组件
  },
//   mounted: {
     // 生命周期
//   },
  computed: {
    // 计算属性
  },
  methods: {
    // 函数
    searchcity: function () {
      this.$http.get('http://cangdu.org:8001/v1/pois?city_id=' + this.$store.state.nowcity.id + '&keyword=' + this.inputval + '&type=search').then(response => {
        this.list = response.body
        console.log(response)
      }, response => {
        console.log(response)
      })
    },
    goaddress: function (e) {
      var arr = []
      if (localStorage.getItem('his')) {
        arr = JSON.parse(localStorage.getItem('his'))
        arr.push(e)
      } else {
        arr.push(e)
      }
      localStorage.setItem('his', JSON.stringify(arr))
      this.his = JSON.parse(localStorage.getItem('his'))
      this.his = ''
    },
    removeall: function () {
      localStorage.clear()
      this.his = ''
    }
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