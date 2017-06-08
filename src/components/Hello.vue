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
      var i1 = this.months.indexOf(selectedMonths[0]) + 1
      var i2 = this.months.indexOf(selectedMonths[1]) + 1
      var selected = []
      for (const cont of this.lands) {
        var el = document.getElementById(cont.id)
        if (el != null) {
          if (
            (i1 <= cont.from && i2 > cont.from ||
            i1 <= cont.to && i2 >= cont.to) && i1 !== i2
          ) {
            selected.push(cont)
          }
        }
      }
      this.selectedLands = selected
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
