<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList :letter="letter" :hotCities="hotCities" :cities="cities"></CityList>
    <CityAlphabet @change="handleLetterChange" :cities="cities"></CityAlphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handleGetCityInfo)
    },
    handleGetCityInfo (res) {
      console.log(res)
      if (res.data.ret && res.data.data) {
        const data = res.data.data
        this.hotCities = data.hotCities
        console.log(1)
        this.cities = data.cities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
      console.log(letter)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
