import React from 'react';

import Plotly from 'plotly.js-dist-min';
import createPlotlyComponent from 'react-plotly.js/factory';


const Plot = createPlotlyComponent(Plotly)

export const DonutChart = (props: any) => {
  return (
    React.createElement(Plot, {
      data: [{
        type: 'pie',
        values: props.values,
        labels: props.labels,
        hole: 0.4,
        textinfo: 'none'
      }],
      layout: {
        title: props.chartName,
        annotations: [{
          text: props.total,
          showarrow: false,
          font: {
            family: 'Verdana, sans-serif',
            size: 15,
          }
        }],
        width: 450,
        height: 350,
        showlegend: false
      }
    })
  )
}