d3.csv('https://ethercalc.org/w2gfa2jtho6c.csv')
  .then(makeChart);

function makeChart(players) {
  var playerLabels = players.map(function(d) {return d.Date});
  var weeksData = players.map(function(d) {return d.Sum});

  var chart = new Chart('chart', {
    type: 'bar',
    data: {
      labels: playerLabels,
      datasets: [
        {
          data: weeksData
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked'
      },
      tooltips: {
        mode: 'index',
        intersect: false
      },
      responsive: true,
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }
  });
}
