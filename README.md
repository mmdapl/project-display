## project-display

> 基于Element UI和Vant UI框架构建的项目展示静态页面，支持PC端和移动端

![](http://youpai.142vip.cn/project-display/images/project-show.png)

<p align="center">
<a href="#wechat" target="_blank"><img src="https://img.shields.io/badge/WeChat-微信-yellow.svg"></a> 
<a href="https://space.bilibili.com/350937042" target="_blank"><img src="https://img.shields.io/badge/Bilibili-哔哩哔哩-green.svg"></a> 
<a href="https://142vip.cn" target="_blank"><img src="https://img.shields.io/badge/142vip-个人网站-orange.svg"></a>
<a href="http://yapi.142vip.cn" target="_blank"><img src="https://img.shields.io/badge/yapi-接口系统-8fe.svg"></a>
<a href="https://blog.142vip.cn" target="_blank"><img src="https://img.shields.io/badge/blog-我的博客-blue.svg"></a>
<a href="https://github.com/mmdapl" target="_blank"><img src="https://img.shields.io/badge/github-Github-9ac.svg"></a>
<a href="https://gitee.com/mmdapl" target="_blank"><img src="https://img.shields.io/badge/gitee-码云-4ed.svg"></a>
<a href="https://blog.csdn.net/Mmdapl" target="_blank"><img src="https://img.shields.io/badge/csdn-CSDN-8ea.svg"></a>
</p>

### 基本目录
```bash
├─.vscode  
├─build    
├─config
├─dist
│  └─static
│      ├─css
│      ├─fonts
│      ├─img
│      └─js
├─img
├─node_modules
├─src
├─static
├─.babelrc
├─.editorconfig
├─.eslintignore
├─.eslintrc.js
├─.gitignore
├─.postcssrc.js
├─index.html
├─LICENSE
├─package.json
├─package-lock.json
├─projects.json
├─projects_example.json
├─README.md
├─项目简要说明.md
```

### 简要说明
- 信息自动更新
项目信息的自动更新依赖的是主目录下的projects.json文件，也可以参考projects_example.json示例文件，需要将json文件发布到cdn或者其他服务器上，并提供有效的访问地址，当你不部署的时候，将mobile.vue和web.vue下面的axios请求换成对应的地址即可；
```javascript
methods: {
// 获取项目信息的方法
getProjectInfos () {
    // 注意修改地址
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
```
- 项目部署
目前已经上线的项目，采用docker+nginx的方式，当然考虑到vue单页面应用的SEO和加载问题，部分打包后的文件，采用`又拍云`的方式进行存储。详细可以参考[项目校验说明](项目简要说明.md)
### 全站置灰
以来的是projects.json文件中的gray字段，gray 意为灰色，这本来是一个特殊的功能，当gray设置为true时，线上的项目就会因为gray设置为true，整个站点置于灰色，用于特殊日期默哀、惊醒、告慰等，单元不会使用吧
```json
{
    "projects": [
      {
        "image": "http://blogimg.zhulou.net/jianshu/2019/3/zI7FZr.png",
        "name": "Promethe监控",
        "desc": "Prometheus 是由 SoundCloud 开源监控告警解决方案。",
        "keys": ["mysql集群", "linux系统", "实时监控"],
        "url": "http://view.142vip.cn/prometheus"
      },
      {
        "image": "http://blogimg.zhulou.net/jianshu/2019/3/zI7FZr.png",
        "name": "Promethe监控",
        "desc": "Prometheus 是由 SoundCloud 开源监控告警解决方案。",
        "keys": ["mysql集群", "linux系统", "实时监控"],
        "url": "http://view.142vip.cn/prometheus"
      }
    ],
    "gray":true
  }
```

### 线上效果
目前以该项目为代码原型的项目展示功能，已经部署上线，主要是对自己正在重构或已完成的项目进行总结、展示，线上效果[预览](http://view.142vip.cn)

- PC端

![](http://youpai.142vip.cn/project-display/images/image-20200609140209515.png)

- 移动端

![](http://youpai.142vip.cn/project-display/images/image-20200609140530406.png)

### 赞赏支持

人生漫漫，却又白驹过隙；若项目对你有帮助，不如请作者喝一杯奶茶...赞赏过得一定要扫下方右侧微信跟我说呀！！！！！！
<a name="wechat"></a>
<p align="center">
<img src="https://cdn.142vip.cn/article-notes/img/weChatDonate.jpg" width="320" height="320" align="center" style="margin-right:20px;" /><img src="https://cdn.142vip.cn/article-notes/img/wechat.jpg" width="320" height="320" align="center" />



</p>





**若你有跟作者相同的困惑、感悟，欢迎关注[B站--Rong姐姐好可爱](https://space.bilibili.com/350937042) 交流学习.**
