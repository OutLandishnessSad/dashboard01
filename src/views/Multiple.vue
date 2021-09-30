<template>
  <div>
    <h3>Multiple graphs</h3>
    <bar-chart :width="300" :height="300" />
    <line-chart :width="1200" :height="350" />
    
  </div>
</template>

<script>
import BarChart from '@/components/BarChart'
import LineChart from '@/components/LineChart'

export default {
  components: {
    BarChart,
    LineChart
  }
}
</script>