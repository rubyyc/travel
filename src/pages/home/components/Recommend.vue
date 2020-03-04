<template>
  <div>
    <div class="title">热销</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-tile">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      // recommendList: [
      //   {
      //     id: '0001',
      //     imgUrl: 'https://imgs.qunarzz.com/sight/p0/1609/ca/ca736c64da554ffaa3.water.jpg_200x200_5efad21c.jpg',
      //     title: '合肥融创乐园',
      //     desc: '合肥融创乐园'
      //   },
      //   {
      //     id: '0002',
      //     imgUrl: 'https://imgs.qunarzz.com/sight/p0/1609/ca/ca736c64da554ffaa3.water.jpg_200x200_5efad21c.jpg',
      //     title: '合肥融创乐园',
      //     desc: '合肥融创乐园'
      //   },
      //   {
      //     id: '0003',
      //     imgUrl: 'https://imgs.qunarzz.com/sight/p0/1609/ca/ca736c64da554ffaa3.water.jpg_200x200_5efad21c.jpg',
      //     title: '合肥融创乐园',
      //     desc: '合肥融创乐园'
      //   },
      //   {
      //     id: '0004',
      //     imgUrl: 'https://imgs.qunarzz.com/sight/p0/1609/ca/ca736c64da554ffaa3.water.jpg_200x200_5efad21c.jpg',
      //     title: '合肥融创乐园',
      //     desc: '合肥融创乐园'
      //   }
      // ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .title
    margin-top .2rem
    line-height .84rem
    background #eee
    text-indent .2rem
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>
