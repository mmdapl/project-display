<template>
    <div>
        <mobilePage v-if="isPhoneShow"></mobilePage>
        <webPage v-if="!isPhoneShow"></webPage>
    </div>
</template>

<style lang="">

</style>

<script>
import mobilePage from '@/view/mobile'
import webPage from '@/view/web'
export default {
  data () {
    return {
      isPhoneShow: false
    }
  },
  components: {
    mobilePage,
    webPage
  },
  created () {
    const isPhone = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    if (isPhone) {
      // 手机端
      this.isPhoneShow = true
    } else {
      // pc端
      this.isPhoneShow = false
    }
  }
}
</script>
