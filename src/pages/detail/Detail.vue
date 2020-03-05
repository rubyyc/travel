<template>
  <div>
    <DetailBanner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      list: [],
      gallaryImgs: []
    //   list: [
    //     {
    //       title: '成人票',
    //       children: [
    //         {
    //           title: '成人三馆联票',
    //           children: [
    //             {
    //               title: '成人三馆联票 合肥销售'
    //             },
    //             {
    //               title: '成人三馆联票 阜阳销售'
    //             }
    //           ]
    //         },
    //         {
    //           title: '成人五馆联票'
    //         }
    //       ]
    //     },
    //     {
    //       title: '学生票'
    //     },
    //     {
    //       title: '儿童票'
    //     },
    //     {
    //       title: '特惠票'
    //     }
    //   ]
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .content
    height 50rem
</style>
