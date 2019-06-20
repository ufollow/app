<template>
  <div class="p-4">
    <div class="card shadow">
      <div class="card-header text-primary">
        Número de interações
      </div>
      <div class="card-body">
        <canvas ref="interactions" height="120"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  mounted () {
    this.$parent.title = 'Indicadores'
    this.interactions()
  },
  methods: {
    interactions () {
      new Chart(this.$refs.interactions, {
        type: 'bar',
        data: {
          labels: ['01/06', '02/06', '03/06', '04/06', '05/06', '06/06', '07/06', '08/06', '09/06', '10/06', '11/06', '12/06'],
          datasets: [{
            data: [89, 32, 54, 26, 31, 48, 53, 26, 51, 60, 82, 145],
            backgroundColor: 'rgba(89, 96, 163, .75)'
          }]
        },
        options: {
          responsive: true,
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: {
              label: function (tooltipItems, data) {
                var dataset = data.datasets[tooltipItems.datasetIndex]
                var value = dataset.data[tooltipItems.index]

                return value + ' interações'
              }
            }
          }
        }
      })
    }
  }
}
</script>
