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
    'selectedLands'
  ],
  data: function () {
    return {
      landClass: 'land'
    }
  },
  watch: {
    selectedLands: function (selectedLands) {
      console.log(selectedLands)
      var landElements = document.getElementsByClassName(this.landClass)
      for (const landElement of landElements) {
        landElement.setAttribute('class', this.landClass)
      }
      for (const selectedLand of selectedLands) {
        var selectedLandElement = document.getElementById(selectedLand.id)
        if (selectedLandElement != null) {
          selectedLandElement.setAttribute('class', this.landClass + ' active')
        }
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
