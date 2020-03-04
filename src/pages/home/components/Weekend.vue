<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-tile">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
      // recommendList: [
      //   {
      //     id: '0001',
      //     imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/8b/c2fd277d149df.jpg_r_640x214_81b57b6a.jpg',
      //     title: '合肥融创乐园',
      //     desc: '合肥融创乐园'
      //   },
      //   {
      //     id: '0002',
      //     imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/8b/c2fd277d149df.jpg_r_640x214_81b57b6a.jpg',
      //     title: '合肥融创乐园',
      //     desc: '合肥融创乐园'
      //   },
      //   {
      //     id: '0003',
      //     imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/8b/c2fd277d149df.jpg_r_640x214_81b57b6a.jpg',
      //     title: '合肥融创乐园',
      //     desc: '合肥融创乐园'
      //   },
      //   {
      //     id: '0004',
      //     imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/8b/c2fd277d149df.jpg_r_640x214_81b57b6a.jpg',
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
    line-height .84rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    height 0
    overflow hidden
    padding-bottom 37.09%
  .item-img
    width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>
