
        <template>
      <div class="hello">
        <h1>Surf Map</h1>
        <div>
          <vue-slider
            ref="slider"
            v-model="value"
            :piecewise="true"
            :piecewiseLabel="true"
            :data='data'
          	:min="1"
          	:max="12"
            ></vue-slider>
        </div>
        <my-svg src="world.svg" width="1000px" height="700px" :data="data" :value="value"></my-svg>
      </div>
    </template>

    <script>
    import vueSlider from 'vue-slider-component'
    import MySvg from '@/components/MySvg'

    export default {
      name: 'hello',
      components: {
        MySvg,
        vueSlider
      },
      data () {
        return {
          data: ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'],
          value: ['jan', 'feb']
        }
      }
    }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style>
      .slider{
        width: 700px !important;
      }
    </style>
