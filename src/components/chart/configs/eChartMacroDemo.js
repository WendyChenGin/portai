import { macroPredictionData } from "../../../mockapi/macroPredictionData";

// Version 1
// Helper to extract continuous ranges of true recession
// const extractRecessionAreas = (data) => {
//   const ranges = [];
//   let start = null;
//   for (let i = 0; i < data.length; i++) {
//     const item = data[i];
//     if (!item?.date) continue;
//     if (start === null && item.recession === 1) {
//       start = item.date;
//     } else if (start !== null && item.recession === 0) {
//       ranges.push([{ xAxis: start }, { xAxis: item.date }]);
//       start = null;
//     }
//   }
//   if (start !== null) {
//     ranges.push([{ xAxis: start }, { xAxis: data[data.length - 1].date }]);
//   }
//   return ranges;
// };

// const option = {
//   tooltip: {
//     trigger: 'axis',
//     formatter: (params) => {
//       const item = params[0]?.data || {};
//       return `
//         Date: ${item.date}<br/>
//         Predicted Probability: ${item.probability}<br/>
//         Actual Recession: ${item.recession === 1 ? 'Yes' : 'No'}
//       `;
//     }
//   },
//   legend: {
//     data: ['Predicted Probability'],
//     bottom: 0
//   },
//   xAxis: {
//     type: 'category',
//     boundaryGap: false,
//     data: macroPredictionData.map(item => item.date)
//   },
//   yAxis: {
//     type: 'value',
//     min: 0,
//     max: 1,
//     name: 'Probability'
//   },
//   dataZoom: [
//     { type: 'inside', start: 80, end: 100 },
//     { type: 'slider', height: 24, bottom: 30 }
//   ],
//   series: [
//     {
//       name: 'Predicted Probability',
//       type: 'line',
//       smooth: true,
//       symbol: 'none',
//       lineStyle: {
//         width: 2,
//         type: 'dashed'
//       },
//       areaStyle: {
//         opacity: 0
//       },
//       data: macroPredictionData.map(item => ({
//         value: [item.date, item.probability],
//         ...item
//       })),
//       encode: {
//         x: 0,
//         y: 1
//       },
//       markArea: {
//         silent: true,
//         data: extractRecessionAreas(macroPredictionData),
//         itemStyle: {
//           color: '#91c6f0ff'
//         }
//       },
//       markLine: {
//         symbol: 'none',
//         silent: true,
//         data: [{ yAxis: 0.4 }],
//         lineStyle: {
//           type: 'dotted',
//           color: '#666'
//         },
//         label: {
//           formatter: 'Threshold',
//           position: 'end'
//         }
//       }
//     }
//   ]
// };

// export default option;


//Version 2
const xData = macroPredictionData.map(item => item.date);
const probabilityData = macroPredictionData.map(item => item.probability);
const predictedBar = macroPredictionData.map(item => item.predict === 1 ? 1 : 0);
const actualBar = macroPredictionData.map(item => item.recession === 1 ? 1 : 0);

const option = {
  title: {
    text: 'AI Recession Model',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    formatter: (params) => {
      const i = params[0].dataIndex;
      const date = macroPredictionData[i]?.date;
      const prob = macroPredictionData[i]?.probability;
      const pred = macroPredictionData[i]?.predict === 1 ? 'Yes' : 'No';
      const rec = macroPredictionData[i]?.recession === 1 ? 'Yes' : 'No';
      return `
        Date: ${date}<br/>
        Predicted Probability: ${prob}<br/>
        Predict Recession: ${pred}<br/>
        Actual Recession: ${rec}
      `;
    }
  },
  legend: {
    data: ['Probability', 'Predicted Recession', 'Actual Recession'],
    bottom: -5
  },
  grid: [
    { top: 50, height: '55%', bottom: 130 },         // 折线图
    { top: '67%', height: '20%' }       // 条形图
  ],
  xAxis: [
    {
      type: 'category',
      data: xData,
      boundaryGap: false,
      axisLabel: { show: false },
      gridIndex: 0
    },
    {
      type: 'category',
      data: xData,
      boundaryGap: false,
      axisLabel: { rotate: 45 },
      gridIndex: 1
    }
  ],
  yAxis: [
    {
      type: 'value',
      max: 1,
      min: 0,
      name: 'Probability',
      gridIndex: 0
    },
    {
      type: 'value',
      max: 1,
      min: 0,
      show: false,
      gridIndex: 1
    }
  ],
  dataZoom: [
    {
      type: 'slider',
      xAxisIndex: [0, 1],
      bottom: 90,
      height: 20,
      startValue: '2015-01-01'
    },
    {
      type: 'inside',
      xAxisIndex: [0, 1],
      startValue: '2015-01-01'
    }
  ],
  series: [
    {
      name: 'Probability',
      type: 'line',
      data: probabilityData,
      xAxisIndex: 0,
      yAxisIndex: 0,
      lineStyle: {
        color: '#1890FF',
        width: 2,
        type: 'dashed',
      },
      markLine: {
        silent: true,
        symbol: 'none',
        data: [{ yAxis: 0.4 }],
        label: {
          formatter: 'Threshold',
          position: 'end'
        }
      }
    },
    {
      name: 'Predicted Recession',
      type: 'bar',
      data: predictedBar,
      xAxisIndex: 1,
      yAxisIndex: 1,
      barWidth: '100%',
      itemStyle: { color: '#afb3c1ff' }
    },
    {
      name: 'Actual Recession',
      type: 'bar',
      data: actualBar,
      xAxisIndex: 1,
      yAxisIndex: 1,
      barWidth: '100%',
      itemStyle: { color: '#1890FF' }
    }
  ]
};

export default option;