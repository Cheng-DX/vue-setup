import { expect, test } from 'vitest'

function randomXData(seed) {
  let data = [];
  for (let i = 0; i < seed; i++) {
    data.push('X' + (i + 1))
  }
  return data;
}

function randomSeries(seed) {
  let series = []
  for (let i = 0; i < seed; i++) {
    let data = []
    for (let i = 0; i < seed; i++) {
      data.push(Math.floor(Math.random() * 1000))
    }
    series.push({
      name: 'Random Series' + (i + 1),
      data,
      type: Math.random() > 0.5 ? 'line' : 'bar',
      smooth: true,
      emphasis: {
        focus: 'series'
      },
    })
  }
  return series;
}


import indexVue from '../src/'
test.concurrent('random', () => {
  
});