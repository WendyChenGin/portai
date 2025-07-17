// Updated eChart configuration to use ECharts with recession probability data and area segments
// import * as echarts from 'echarts';
// Demo Data
import { macroPredictionData } from "../../../mockapi/macroPredictionData";

// Helper to extract continuous ranges of true recession
const extractRecessionAreas = (data) => {
  const ranges = [];
  let start = null;
  for (let i = 0; i < data.length; i++) {
    if (start === null && data[i].recession === 1) {
      start = data[i].date;
    } else if (start !== null && data[i].recession === 0) {
      ranges.push([{ xAxis: start }, { xAxis: data[i].date }]);
      start = null;
    }
  }
  if (start !== null) {
    ranges.push([{ xAxis: start }, { xAxis: data[data.length - 1].date }]);
  }
  return ranges;
};

const option = {
  // title: {
  //   text: 'Macro – AI Recession Prediction'
  // },
  tooltip: {
    trigger: 'axis',
    formatter: (params) => {
      const predict = params.find(p => p.seriesName === 'Predicted Probability')?.data;
      const recession = macroPredictionData[params[0].dataIndex]?.recession;
      return `
        Date: ${macroPredictionData[params[0].dataIndex].date}<br/>
        Predicted Probability: ${predict}<br/>
        Actual Recession: ${recession === 1 ? 'Yes' : 'No'}
      `;
    }
  },
  legend: {
    data: ['Predicted Probability', 'Recession Period'],
    bottom: 0
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: macroPredictionData.map(item => item.date)
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 1,
    name: 'Probability'
  },
    dataZoom: [
    {
      type: 'inside',
      // start: 0,
      start: 80,
      end: 100
    },
    {
      type: 'slider',
      height: 24,
      bottom: 30
    }
  ],
  series: [
    {
      name: 'Predicted Probability',
      type: 'line',
      smooth: true,
      symbol: 'none',
      lineStyle: {
        color: '#1890FF',
        width: 2,
        type: 'dashed'
      },
      areaStyle: {
        opacity: 0
      },
      data: macroPredictionData.map(item => item.predict),
      markArea: {
        silent: true,
        data: extractRecessionAreas(macroPredictionData),
        itemStyle: {
          color: '#91c6f0ff' // blue for actual recession
        }
      }
    }
  ]
};

export default option;