/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import ReactECharts from 'echarts-for-react';
import { Row, Col, Typography } from "antd";
import option from "./configs/eChartMacroDemo";
function EChart() {
  const { Title, Paragraph } = Typography;

  return (
    <>
      <div id="chart">
        <ReactECharts
          option={option}
          style={{ height: 600, width: "100%" }}
        />
      </div>
    </>
  );
}

export default EChart;