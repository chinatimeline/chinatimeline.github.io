
let weekDays = [
  '周日 Sun',
  '周一 Mon',
  '周二 Tue',
  '周三 Wed',
  '周四 Thu',
  '周五 Fri',
  '周六 Sat',
]

let shapeColors = [
  '#A6CEE3',
  '#1F78B4',
  '#B2DF8A',
  '#33A02C',
  '#FB9A99'
]

function loadCSV(url) {
  return new Promise((resolve, reject) => {
    Plotly.d3.csv(url, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

function plotTimeline(title, eventURL, termURL) {
  Promise.all([loadCSV(eventURL), loadCSV(termURL)]).then(([events, terms]) => {
    let eventData = prepEventData(events)
    let termData = prepTermData(terms)
    let termShapes = prepTermShapes(terms)

    let today = (date => `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)(new Date())

    let layout = {
      title: title,
      hovermode: 'closest',
      dragmode: 'zoom',
      xaxis: {
        title: {
          text: '时间',
        },
        type: 'date',
        showgrid: true,
        rangeselector: {
          x: 0.1,
          y: 1,
          buttons: [
            {
              step: 'year',
              stepmode: 'backward',
              count: 5,
              label: '5y'
            },
            {
              step: 'year',
              stepmode: 'backward',
              count: 10,
              label: '10y'
            },
            {
              step: 'year',
              stepmode: 'backward',
              count: 15,
              label: '15y'
            },
            {
              step: 'year',
              stepmode: 'backward',
              count: 20,
              label: '20y'
            },
            {
              step: 'all'
            }
          ]
        },
        rangeslider: {
          bgcolor: '#E5ECF6',
          thickness: 0.15,
          yaxis: {
            rangemode: 'match'
          }
        },
        tickmode: 'linear',
        dtick: 'M12',
        tick0: '2000-01-01'
      },
      yaxis: {
        title: {
          text: '星期'
        },
        ticktext: weekDays.map(d => `${d}<br><br>`),
        tickvals: [0, 1, 2, 3, 4, 5, 6],
        showgrid: true,
        fixedrange: false
      },
      shapes: [
        {
          type: 'line',
          editable: false,
          layer: 'above',
          line: {
            width: 1,
            color: 'black',
            dash: 'dashdot'
          },
          xref: 'paper',
          x0: 0,
          x1: 1,
          yref: 'y',
          y0: 7,
          y1: 7
        },
        {
          type: 'line',
          editable: false,
          layer: 'above',
          line: {
            width: 1,
            color: 'blue',
            dash: 'dot'
          },
          xref: 'x',
          x0: today,
          x1: today,
          yref: 'y',
          y0: 0,
          y1: 7
        }
      ].concat(termShapes)
    }

    Plotly.newPlot('timeline-chart', eventData.concat(termData), layout)
  })
}

function prepEventData(rawData) {
  let dataSets = []
  let x = []
  let y = []
  let text = []
  let groups = rawData.reduce((groups, entry) => {
    if (!groups[entry.group]) {
      groups[entry.group] = []
    }
    groups[entry.group].push(entry)
    return groups
  }, {})

  return Object.keys(groups).map((name, index) => {
    let x = []
    let y = []
    let hovertext = []
    let size = []

    groups[name].map(entry => {
      let date = new Date(Date.parse(entry.date))
      let dayString = weekDays[date.getUTCDay()]

      x.push(entry.date)
      y.push(date.getUTCDay() + (Math.random() * 0.6 + 0.2))
      let entryText = `${entry.date}, ${dayString}<br>${entry.name.match(/.{1,50}/g).join('<br>')}`
      hovertext.push(entryText)
      size.push(10)
    })

    return {
      type: 'scatter',
      mode: 'markers',
      hoverinfo: 'text',
      name: name,
      marker: {
        symbol: index,
        opacity: 0.5,
        size: size
      },
      x: x,
      y: y,
      hovertext: hovertext,
      hoverlabel: {
        align: 'left'
      }
    }
  })
}

function prepTermData(data) {
  let x = []
  let y = []
  let text = []

  data.map(term => {
    x.push(term.timeFrom)
    y.push(7.8)
    text.push(term.name)
  })

  return {
    type: 'scatter',
    mode: 'text',
    hoverinfo: 'none',
    showlegend: false,
    textposition: 'bottom right',
    x: x,
    y: y,
    text: text
  }
}

function prepTermShapes(data) {
  return data.map((term, index) => {
    return {
      type: 'rect',
      layer: 'above',
      editable: false,
      opacity: 0.2,
      xref: 'x',
      fillcolor: shapeColors[index],
      x0: term.timeFrom,
      x1: term.timeTo,
      yref: 'paper',
      y0: 0,
      y1: 1,
      line: {
        width: 0
      }
    }
  })
}