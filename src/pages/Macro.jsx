import { useState } from "react";
import '../assets/styles/main.css';
import '../assets/styles/responsive.css';
import Echart from "../components/chart/EChart";
import LineChart from "../components/chart/LineChart";
import MacroCycle from "../assets/images/Macro_AI_Economic_Cycle_Demo.png";

import {
  Card,
  Col,
  Row,
  Typography,
} from "antd";

const { Title } = Typography;

export default function Macro() {
  const [reverse, setReverse] = useState(false);

  return (
    <>
      <div style={{ margin: '0 35px 0 20px' }}>
        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <Title level={5}>AI Recession Model</Title>
              <Echart />
            </Card>
          </Col>
        </Row>
        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mb-24">
            <Card
              bordered={false}
              className="criclebox h-full"
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Title level={5}>AI Economic Cycle Model</Title>
              <div style={{ width: '100%', height: '100%', margin: '20px 0 0 0'}}>
                <img
                  src={MacroCycle}
                  alt="Macro Cycle"
                  style={{
                    width: '100%',
                    height: 'auto',              
                    maxWidth: '800px',            
                    display: 'block',
                    margin: '0 auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
