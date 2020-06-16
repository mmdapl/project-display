<template>
  <div class="web-div" v-if="isShow">
    <div class="project-div">
      <div class="title">
        <img src="../assets/project-show.png" alt="">
      </div>
      <el-carousel
        indicator-position="outside"
        :interval="4000"
        arrow="always"
        height="500px"
      >
        <el-carousel-item
          v-for="index in Math.ceil(projects.length/3)"
          :key="index"
        >
          <div class="container-div">
            <el-row
              type="flex"
              justify="center"
            >

              <el-col
                :span="8"
                class="project-item"
                v-for="item in (index*3>projects.length?(projects.length-(index-1)*3):3)"
                :key="item"
              >
                <div class="project-container">
                  <img
                    :src="projects[3*(index-1)+(item-1)].image"
                    alt=""
                  >
                  <h3>{{projects[3*(index-1)+(item-1)].name}}</h3>
                  <p>{{projects[3*(index-1)+(item-1)].desc}}</p>
                  <dl>
                    <dt>关键字</dt>
                    <dd v-for="key in projects[3*(index-1)+(item-1)].keys" :key="key" >{{key}}</dd>
                  </dl>
                  <span>
                    <a
                      :href="projects[3*(index-1)+(item-1)].url"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        详情<i class="el-icon-right"></i>
                      </span>
                    </a>
                  </span>
                </div>
              </el-col>

            </el-row>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 网站底部 -->
    <FooterPage></FooterPage>
  </div>
</template>
<style scoped>
.title {
  color: #393b40;
  padding: 30px 0 30px;
  text-align: center;
  font-size: 30px;
  letter-spacing: 1.09px;
}
.web-div {
  background: #f1f3ff;
  height: 100vh;
  min-height:850px;
  min-width:1200px;
}
.project-div {
  margin-left: 120px;
  margin-right: 120px;
  min-width: 1200px;
  height: 700px;
}
.project-item {
  padding: 20px;
  transition:all .15s linear;box-sizing:border-box
}
.project-container{
  height: 440px;
  min-height:400px;
}
.project-item:hover {
  top: -20px;
  position: relative;
  transition: all 0.2s linear;
}
.project-item:hover>div{
  height: 460px;
  /* 阴影 */
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.1s linear;
}

.project-item:hover>div > span {
  opacity: 1;
  transition: opacity 0.2s linear 50ms;
  display: inline;
}
.project-container > span>a:hover {
  color: #e6c16c;
}
.project-container > span a:hover span.arrow-f {
  transform: translate(4px, 0);
  /* background: url(../images/marketplace-selected-arrow2.svg); */
}

.project-container {
  text-align: left;
  background: #fff;
  border-radius: 6px;
  text-align: left;
  overflow: hidden;
  transition: all 0.15s linear;
}
.project-container > img {
  width: 100%;
  height: 200px;
  border-radius:5px;
}
.project-container > h3 {
  margin: 10px 0px 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px !important;
  color: #252b3a !important;
  text-align: left;
}
.project-container > p {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  font-size: 14px;
  color: #666a75;
  letter-spacing: 0.51px;
  /* 超出省略号 */
  overflow:hidden;
  text-overflow:ellipsis;
  /* 限制最多3行 */
  display:-webkit-box;
  -webkit-line-clamp:3;
  -webkit-box-orient: vertical;
}
.project-container > dl {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 14px;
  color: #252b3a;
  letter-spacing: 0.51px;
  line-height: 19px;
  position: relative;
}
.project-container > dl > dt {
  font-size: 14px !important;
  color: #252b3a;
  letter-spacing: 0.51px;
  line-height: 19px;
  position: relative;
}
.project-container > dl > dd {
  width: 50%;
  margin-bottom: 6px;
  font-size: 12px;
  color: #a0a2a8;
  letter-spacing: 0.44px;
  line-height: 20px;
  margin-left: 0px;
  float: left;
}
.project-container > span {
  padding-left: 20px;
  padding-right: 20px;
  display: none;
  float: right;
}
.project-container > span > a {
  text-decoration: none;
  color: inherit;
}

</style>

<script>
import FooterPage from '@/components/footer'
import axios from 'axios'
export default {
  name: 'web',
  components: {
    FooterPage
  },
  data () {
    return {
      // projects: [{
      //   image: 'http://blogimg.zhulou.net/jianshu/2019/3/zI7FZr.png',
      //   name: 'Promethe监控',
      //   desc: 'Prometheus 是由 SoundCloud 开源监控告警解决方案。',
      //   keys: ['mysql集群', 'linux系统', '实时监控'],
      //   url: 'http://view.142vip.cn/prometheus'
      // }, {
      //   image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1238940841,3150153789&fm=26&gp=0.jpg',
      //   name: 'Grafana数据可视化',
      //   desc: 'XXX',
      //   keys: ['欠人情翁', '二恶烷若'],
      //   url: 'http://view.142vip.cn/grafana'
      // }, {
      //   image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1238940841,3150153789&fm=26&gp=0.jpg',
      //   name: '监控平台',
      //   desc: 'XXX',
      //   keys: ['欠人情翁', '二恶烷若'],
      //   url: 'http://view.142vip.cn/grafana'
      // }, {
      //   image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1238940841,3150153789&fm=26&gp=0.jpg',
      //   name: '监控平台',
      //   desc: 'XXX',
      //   keys: ['欠人情翁', '二恶烷若'],
      //   url: 'http://view.142vip.cn/grafana'
      // }, {
      //   image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1238940841,3150153789&fm=26&gp=0.jpg',
      //   name: '个人网站',
      //   desc: 'XXX',
      //   keys: ['欠人情翁', '二恶烷若'],
      //   url: 'https://142vip.cn'
      // }, {
      //   image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1238940841,3150153789&fm=26&gp=0.jpg',
      //   name: '我的博客',
      //   desc: 'XXX',
      //   keys: ['欠人情翁', '二恶烷若'],
      //   url: 'http://blog.142vip.cn/'
      // }]
      projects: [],
      isShow: false
    }
  },
  methods: {
    getProjectInfos () {
      axios.get('http://youpai.142vip.cn/project-display/projects.json').then(res => {
        // 获取网站变灰属性，项目信息
        const {projects, gray} = res.data
        // 数据赋值
        this.projects = projects
        if (gray) {
          // 设置为灰色，即gray=true
          const html = document.getElementsByTagName('html')
          html.className = 'pageTranslateGraySpecial'
        }
        this.isShow = true
      }).catch(() => {
        this.isShow = false
        this.$message.error('实在抱歉，站点出现问题，快去联系站长吧~')
      })
    }
  },
  created () {
    this.getProjectInfos()
  },
  mounted () {
    this.getProjectInfos()
  }

}
</script>
