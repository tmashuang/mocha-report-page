import React, { useState } from 'react';

import Plotly from 'plotly.js-dist-min';
import createPlotlyComponent from 'react-plotly.js/factory';

import { useAppDispatch, useAppSelector } from "../../app/hooks"

const Plot = createPlotlyComponent(Plotly)

export const DonutChart = (props: any) => {
  return (
    React.createElement(Plot, {
      data: [{
        type: 'pie',
        values: [1, 1, 1, 1],
        labels: ['A','B','C','D'],
        hole: 0.4
      }],
      layout: {
        title: 'Chart Title',
        annotations: [{
          text: 'Test total',
          showarrow: false,
          font: {
            family: 'Verdana, sans-serif',
            size: 15,
          }
        }],
        width: 400,
        height: 400
      }
    })
  )
}