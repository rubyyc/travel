<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1606/4a/4ae2bbafcc977a54e2.water.jpg_600x330_616ff41d.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">合肥海洋世界</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe633;</span>39
        </div>
      </div>
    </div>
    <CommonGallary @close="handleGallaryClose" :imgs="imgs" v-show="showGallary"></CommonGallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['https://imgs.qunarzz.com/sight/p0/1606/84/84ea5c5ca58a57abe2.water.jpg_r_800x800_48faeaeb.jpg', 'https://imgs.qunarzz.com/sight/p0/1602/50/5013bd8fb71e83bc90.water.jpg_r_800x800_4374d1a2.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image liner-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-title
        font-size .32rem
        padding 0 .2rem
        flex 1
      .banner-number
        line-height .32rem
        height .32rem
        padding 0 .4rem
        margin-top .14rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        fontsiz .24rem
        .banner-icon
          font-size .24rem
</style>
