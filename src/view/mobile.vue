<template>

  <div class="mobile-div" v-if="isShow">

    <van-row>
      <van-col
        span="24"
        class="logo"
      >
        <van-image src="http://youpai.142vip.cn/project-display/images/project-show.png" />
      </van-col>

    </van-row>
    <!-- 项目轮播 -->
    <van-row class="loop-div">
      <van-col span="24">
        <van-swipe
          @change="onChange"
          :autoplay="3000"
        >
          <van-swipe-item
            v-for="(project, index) in projects"
            :key="index"
          >
            <div class="lazy-image">
              <img v-lazy="project.image" />
              <div>
                <h3>{{project.name}}</h3>
                <p>{{project.desc}}</p>
                <dl>
                  <dt>标签</dt>
                  <dd v-for="(key,index) in project.keys" :key="index">{{key}}</dd>
                </dl>
              </div>
            </div>
          </van-swipe-item>
          <template #indicator>
            <div class="view-btn">
              <van-button
                size="small"
                color="linear-gradient(to right, #4bb0ff, #6149f6)"
                url="http://oauth2.142vip.cn"
              >
              我要预览
              </van-button>
            </div>

            <!-- 角标 -->
            <div class="custom-indicator">
              {{ current + 1 }}/{{projects.length}}
            </div>
          </template>
        </van-swipe>
      </van-col>

    </van-row>
    <!--页脚  -->
    <van-row>
      <van-col span="24">
        <FooterPage></FooterPage>
      </van-col>
    </van-row>
  </div>

</template>
<style scoped>
.mobile-div {
  height: auto;
  background-color: #f1f3ff;
}
.logo {
  padding: 10px;
  margin-top: 20px;
}
.lazy-image {
  padding-left: 5px;
  padding-right: 5px;
  /* padding-bottom: 30px; */
}
.lazy-image > img {
  width: 100%;
}
.lazy-image > div {
  text-align: left;
  padding-left: 15px;
}
.lazy-image > div > h3 {
  padding-right: 20px;
  font-size: 18px !important;
  color: #252b3a !important;
  text-align: left;
}
.lazy-image > div > p {
  padding-bottom: 20px;
  font-size: 14px;
  color: #666a75;
  letter-spacing: 0.51px;
  /* 超出省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  /* 限制最多3行 */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.lazy-image > div > dl > dt {
  font-size: 14px !important;
  color: #252b3a;
  letter-spacing: 0.51px;
  line-height: 19px;
  position: relative;
}
.lazy-image > div > dl > dd {
  width: 50%;
  margin-top: 5px;
  margin-bottom: 6px;
  font-size: 12px;
  color: #a0a2a8;
  letter-spacing: 0.44px;
  line-height: 20px;
  margin-left: 0px;
  float: left;
}
.loop-div {
  background-color: #fff;
  margin: 5px;
  padding-top: 10px;
  text-align: left;
  border-radius: 5px;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.view-btn {
  margin-bottom: 20px;
  text-align: center;
  margin-top: 20px;
}

.loading-div{
  margin-top: 250px;
}

</style>
<script src="https://cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>
<script>
import FooterPage from '@/components/footer.vue'
import Vue from 'vue'
import { Lazyload } from 'vant'
// 懒加载
Vue.use(Lazyload)
import axios from 'axios'
// 消息通知
import { Notify } from 'vant';
export default {
  name: 'mobile',
  components: {
    FooterPage
  },
  data () {
    return {
      projects: [],
      current: 0,
      isShow:false,
    }
  },
  methods: {
    // 分页角标自定义
    onChange (index) {
      this.current = index
    },
    getProjectInfos(){
      // 请求
      axios.get('http://youpai.142vip.cn/project-display/projects.json').then(res=>{
          // 获取网站变灰属性，项目信息
          const {projects,gray}=res.data;
          // 数据赋值
          this.projects=projects
          if(gray){
            // 设置为灰色，即gray=true
          const html=document.getElementsByTagName('html')
          html.className='pageTranslateGraySpecial'
          }
          // 定时开启
          setTimeout(() => {
            this.isShow=true
          }, 1000);
      }).catch(()=>{
          // 危险通知
        Notify({ type: 'danger', message: '实在抱歉，站点出现问题，快去联系站长吧~' });

      })
    }
  },
  created () {
    setTimeout(() => {
    this.getProjectInfos()
    }, 1000);
  },
  mounted(){
    setTimeout(() => {
    this.getProjectInfos()
    }, 1000);
  }
}

</script>
