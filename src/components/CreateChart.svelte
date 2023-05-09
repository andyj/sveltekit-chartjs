<script>
  import { onMount } from 'svelte';
  import { CHART_COLORS, NAMED_COLORS } from './chartColors.js'; // Lifted from chartjs sample pages
  import { DateTime } from 'luxon';
  import Chart from 'chart.js/auto';
  import 'chartjs-adapter-luxon';
  
  export let jsonData = [];
  
  onMount(() => {
    renderChart();
  });

  function renderChart() {
    const ctx = document.getElementById('myChart').getContext('2d'); // This is the canvas element at the bottom of this file
    
    const labels = jsonData.map(function (d) {
      const isoDateWithZ = d.time_stamp.replace(" ", "T") + "Z";
      return DateTime.fromISO(isoDateWithZ).toISO();
    });
    const xData = jsonData.map(function (d) {
      return d.x;
    });
    const yData = jsonData.map(function (d) {
      return d.y;
    });

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            yAxisID: 'xaxis',
            label: 'X axis (mg)',
            data: xData,
            borderColor: CHART_COLORS.red,
            fill: false,
          },
          {
            yAxisID: 'yaxis',
            label: 'Y axis (mg)',
            data: yData,
            borderColor: CHART_COLORS.blue,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            ticks: { color: CHART_COLORS.blue },
            display: true,
            type: 'time',
            time: {
              unit: 'second'
            },
            title: {
              display: true,
              text: 'Date'
            }         
          },
          xaxis: {
            stacked: true,
            position: 'left',
            text: 'X Axis',
            ticks: { color: CHART_COLORS.red },
          },
          yaxis: {
            stacked: true,
            position: 'left',
            text: 'Y Axis',
            ticks: { color: CHART_COLORS.blue },
          },
        },
      },
    });
  }
</script>



<div>
  <canvas id="myChart" />
</div>


<style>
  #canvasContainer{
    border:1px solid #8a8a8a;    ;
    width:100%; 
    height:100%;
    padding:10px;
    border-radius: 8px;
  }
</style>