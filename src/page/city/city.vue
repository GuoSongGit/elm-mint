<template>
    <div>
        <mt-header :title="$store.state.nowcity.name" fixed>
            <mt-button slot="left"><mt-button icon="back"></mt-button></mt-button>
            <mt-button slot="right">切换城市</mt-button>
        </mt-header>
        <div class="mgtop50 bgfff padlr10 padbot10">
            <form v-on:submit.prevent>
                <input class="cityinput" placeholder="输入商务楼，学校，地址" required  v-model="inputval">
                <div class="submit bgcol ih40" @click="searchcity">提交</div>
            </form>
        </div>
        <div class="main">
            <div v-if="list==''" class="his after">
                <div class="contenttop fs0-8 padlr10">搜索历史</div>
                <div v-if="his !=''" class="mainbody bgfff" >
                    <div class="pad10 after"  v-for="item in his" :key="item.key">
                        <div class="ih30">{{item.name}}</div>
                        <div class="ih30 fs0-8 col9f">{{item.address}}</div>
                    </div>
                    <div class="clearall ih30 pad10 col9f"  @click="removeall">清空所有</div>
                </div>
            </div>
            <div v-if="list!=''" class="search bgfff">
                <div class="pad10 after" @click="goaddress({name:item.name,latitude:item.latitude,longitude:item.longitude,address:item.address,geohash:item.geohash})" v-for="item in list" :key="item.key">
                    <div class="ih30">{{item.name}}</div>
                    <div class="ih30 fs0-8 col9f">{{item.address}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
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
  mounted: function () {
    // 生命周期
    if (localStorage.getItem('his')) {
      this.his = JSON.parse(localStorage.getItem('his'))
    }
  },
  computed: {
    // 计算属性
  },
  methods: {
    // 函数
    searchcity: function () {
      if (this.inputval) {
        this.$http.get('http://cangdu.org:8001/v1/pois?city_id=' + this.$store.state.nowcity.id + '&keyword=' + this.inputval + '&type=search').then(response => {
          this.list = response.body
          if (response.body == '') {
            Toast('不存在的')
          }
          console.log(response)
        }, response => {
          console.log(response)
        })
      }
    },
    goaddress: function (e) {
      var arr = []
      if (localStorage.getItem('his')) {
        arr = JSON.parse(localStorage.getItem('his'))
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].geohash == e.geohash) {
            var isok = true
          }
        }
        if (!isok) {
          arr.unshift(e)
        }
      } else {
        arr.unshift(e)
      }
      localStorage.setItem('his', JSON.stringify(arr))
      this.his = JSON.parse(localStorage.getItem('his'))
      this.list = ''
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