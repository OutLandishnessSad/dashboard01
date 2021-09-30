<template>
  <div>
    <h3>Bar Chart Example in Vue</h3>
    <bar-chart :styles="myStyles" />
    <button @click="increase()">Increase height</button>
  </div>
</template>

<script>
import BarChart from '@/components/BarChart'

export default {
  components: {
    BarChart
  },
  data () {
    return {
      height: 300,
      width: 300
    }
  },
  methods: {
    increase () {
     this.height += 30
    }
  },
  computed: {
    myStyles () {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`,
        position: 'absolute'
      }
    }
  }
}
</script>