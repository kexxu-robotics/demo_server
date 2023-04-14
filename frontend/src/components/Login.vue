<template>
  <div ref="chartContainer" :style="{ width: '100%', height: '400px' }"></div>
</template>

<script>
import Dygraph from 'dygraphs';

export default {
  name: 'DygraphsChart',
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      const data = [
        [new Date('2023-01-01'), 10],
        [new Date('2023-02-01'), 20],
        [new Date('2023-03-01'), 15],
        [new Date('2023-04-01'), 25],
      ];

      new Dygraph(this.$refs.chartContainer, data, {
        labels: ['Date', 'Value'],
      });
    },
  },
};
</script>
