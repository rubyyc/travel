<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      // iconList: [
      //   {
      //     id: '0001',
      //     imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      //     desc: '景点门票'
      //   },
      //   {
      //     id: '0002',
      //     imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
      //     desc: '半场温泉'
      //   },
      //   {
      //     id: '0003',
      //     imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
      //     desc: '一日游'
      //   },
      //   {
      //     id: '0004',
      //     imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
      //     desc: '合肥融创乐园'
      //   },
      //   {
      //     id: '0005',
      //     imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
      //     desc: '合肥非遗园'
      //   },
      //   {
      //     id: '0006',
      //     imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
      //     desc: '海洋世界'
      //   },
      //   {
      //     id: '0007',
      //     imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
      //     desc: '姥山岛'
      //   },
      //   {
      //     id: '0008',
      //     imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
      //     desc: '植物园'
      //   },
      //   {
      //     id: '0009',
      //     imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
      //     desc: '李鸿章故居'
      //   }
      // ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl';
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      padding-bottom: 25%
      height: 0
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .44rem
        height: .44rem
        color: $darkTextColor
        text-align: center
        ellipsis()
</style>
