<template>
  <div>
    <img class="inject-me" v-bind:style="style" v-bind:src="svgPath" />
  </div>
</template>

<script>

import SVGInjector from 'svg-injector'

export default {
  name: 'my-svg',
  props: [
    'src', // path relative to assets folder
    'width',
    'height',
    'data',
    'value'
  ],
  watch: {
    value: function (value) {
      console.log('value changed')
      var i1 = this.data.indexOf(value[0])
      var i2 = this.data.indexOf(value[1])
      console.log(i1)
      console.log(i2)
      var de = document.getElementById('DE')
      if (i1 <= 4 && i2 > 4 || i1 < 8 && i2 >= 8) {
        de.setAttribute('class', 'land active')
      } else {
        de.setAttribute('class', 'land')
      }
    }
  },
  mounted: function () {
    var svgsToInject = document.querySelectorAll('img.inject-me')
    var options = {}
    SVGInjector(svgsToInject, options, function (totalSVGsInjected) {

    })
  },
  computed: {
    svgPath: function () {
      var req = require.context('../assets/', true)
      return req('./' + this.src)
    },
    style: function () {
      return 'width: ' + this.width + '; height: ' + this.height + ';'
    }
  }
}
</script>

<style>
  .land{
    fill: #CCCCCC;
    fill-opacity: 1;
    stroke:white;
    stroke-opacity: 1;
    stroke-width:0.5;
  }
  .land.active {
    fill: #3498db;
  }
</style>
