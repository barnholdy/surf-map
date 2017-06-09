<template>
  <div class="hello">
    <h1>Surf Map</h1>
    <div>
      <vue-slider
        ref="slider"
        v-model="selectedMonths"
        :piecewise="true"
        :piecewiseLabel="true"
        :data='months'
      	:min="1"
      	:max="12"
        @callback="onSliderChanged"
        ></vue-slider>
    </div>
    <my-svg
      src="world.svg"
      width="1000px"
      height="700px"
      :selectedLands="selectedLands"
      ></my-svg>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component'
import MySvg from '@/components/MySvg'
import SelectionService from '@/services/SelectionService'
import conts from '@/assets/lands.csv'

export default {
  name: 'hello',
  components: {
    vueSlider,
    MySvg
  },
  data () {
    return {
      months: ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'],
      selectedMonths: ['jan', 'feb'],
      lands: [],
      selectedLands: []
    }
  },
  methods: {
    onSliderChanged: function (selectedMonths) {
      var fromMonth = this.months.indexOf(selectedMonths[0]) + 1
      var toMonth = this.months.indexOf(selectedMonths[1]) + 1
      this.selectedLands = SelectionService.getLandsForSeason(fromMonth, toMonth, this.lands)
    }
  },
  mounted: function () {
    this.lands = conts
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .slider{
    width: 700px !important;
  }
</style>
