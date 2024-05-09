import React from 'react';

import Plotly from 'plotly.js-dist-min';
import createPlotlyComponent from 'react-plotly.js/factory';


const Plot = createPlotlyComponent(Plotly)

export const DonutChart = (props: any) => {
  return (
    React.createElement(Plot, {
      data: [{
        type: 'pie',
        values: props.counts,
        labels: props.files,
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
        width: 400,
        height: 400,
        showlegend: false
      }
    })
  )
}