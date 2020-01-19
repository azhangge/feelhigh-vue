<template>
  <div class="container">
    <div class="header"></div>
    <div class="search">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="新鲜可口" name="0"></el-tab-pane>
        <el-tab-pane label="火辣非常" name="1"></el-tab-pane>
        <el-tab-pane label="优质高分" name="3"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="videoList">
      <div v-for="(item, index) in videoList" :key="index" class="video">
        <div class="video-img"><img class="img" :src="item.coverPhoto" /></div>
        <div class="video-desc">
          <span class="video-name">{{item.videoName}}</span>
        </div>
      </div>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
    <div class="footer">
      <h6 style="margin-top: 10px">版权所有，保留一切权利。赞助商：洲哥文化投资公司。 鄂ICP备06004630号 </h6>
      <h6>一元看片文化无限公司</h6>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VideoList",
    data() {
      return {
        activeName:0,
        total: 0,
        currentPage: 1,
        pageSize: 8,
        videoList:[{
          videoName:"夏家三千金",
          playTimes:"6",
          coverPhoto:"http://img08.tooopen.com/20191112/tooopen_tp_17280928983548.jpg"
        },{
          videoName:"放牛娃的春天",
          playTimes:"44",
          coverPhoto:"http://img08.tooopen.com/20191230/tooopen_tp_153018301824391.jpg"
        },{
          videoName:"叶问4",
          playTimes:"52",
          coverPhoto:"http://img08.tooopen.com/20191220/tooopen_tp_142049204929890.jpg"
        },{
          videoName:"天下无贼",
          playTimes:"1",
          coverPhoto:"http://img08.tooopen.com/20191225/tooopen_tp_094839483959727.jpg"
        },{
          videoName:"逆战2",
          playTimes:"3455",
          coverPhoto:"http://img08.tooopen.com/20191111/tooopen_tp_101155115587862.jpg"
        },{
          videoName:"庆余年",
          playTimes:"22",
          coverPhoto:"http://img08.tooopen.com/20191225/tooopen_tp_095041504127400.jpg"
        },{
          videoName:"我们一家人",
          playTimes:"788",
          coverPhoto:"http://img08.tooopen.com/20191121/tooopen_tp_16530053094363.jpg"
        },{
          videoName:"小猪佩奇",
          playTimes:"3",
          coverPhoto:"http://img08.tooopen.com/20191111/tooopen_tp_163927392714659.jpg"
        },{
          videoName:"唐人街探案",
          playTimes:"8",
          coverPhoto:"http://img08.tooopen.com/20191225/tooopen_tp_095217521728115.jpg"
        }]
      }
    },
    methods: {
      getCurrentPage(){

      }
    }
  }
</script>

<style scoped lang="less">
  .container{
    height: 100%;
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;
  }
  .header{
    height: 12%;
    width: 100%;
    background-image: url("../assets/header.png"); background-repeat:no-repeat; background-size:100% 100%;
  }
  .search{
    width: 98%;
    height: 4%;
    margin: 10px auto;
    margin-left: 44px;
  }
  .videoList{
    height: 62%;
    width: 98%;
    display: flex;
    position: relative;
    margin: 0 auto;
    flex-wrap: wrap;
  }
  .video{
    width: 17.3%;
    height: 50%;
    margin: 0 25px;
    cursor: pointer;
  }
  .video:hover{
    color: dodgerblue;
  }
  .video-img:hover{
    -webkit-box-shadow: #ccc 0px 10px 10px;
    -moz-box-shadow: #ccc 0px 10px 10px;
    box-shadow: #ccc 0px 5px 10px;
  }
  .video-img{
    width: 100%;
    height: 80%;
  }
  .img{
    width: 100%;
    height: 100%;
  }
  .video-desc{
    margin: 10px;
  }
  .video-name{

  }
  .footer{
    width: 100%;
    height: 8%;
    margin-top: 30px;
    font-family: 幼圆;
    display: inline-block;
    vertical-align: middle;
  }
  /deep/.el-tabs__item{
    padding: 0 8px;
  }
  /deep/.el-tabs__nav-wrap::after{
    width: 0;
  }
  /deep/.el-tabs__active-bar{
    height: 0;
  }
  /deep/.el-pagination{
    padding: 20px 5px;
  }
</style>
