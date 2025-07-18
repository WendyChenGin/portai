import { useState } from 'react'
import macroBackground from '../assets/images/macro.png'
import { PlayCircleOutlined,
  RocketOutlined,
  LineChartOutlined,
  ProfileOutlined,
  StockOutlined  } from '@ant-design/icons';
import '../assets/styles/main.css'
import '../assets/styles/responsive.css'
import { Link } from 'react-router-dom';
import { Card, Row, Col, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph } = Typography;

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #1890ff 0%, #722ed1 100%)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Grid Pattern Overlay */}
        <div style={{
          position: 'absolute',
          width: '100%',
          inset: 0,
          opacity: 0.1,
          // backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundImage: `url(${macroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}></div>

        <div style={{ 
          textAlign: 'center', 
          zIndex: 1,
          maxWidth: '800px',
          padding: '0 20px'
        }}>
          <Title 
            level={1} 
            style={{ 
              color: '#fff', 
              fontSize: '3.5rem', 
              marginBottom: '1rem',
              fontWeight: 'bold',
              lineHeight: 1.2
            }}
          >
            Professional Analytics
            <br />
            <span style={{ color: '#91d5ff' }}>Port AI</span>
          </Title>
          <Paragraph 
            style={{ 
              color: '#b3d9ff', 
              fontSize: '1.25rem', 
              marginBottom: '2rem',
              lineHeight: 1.6
            }}
          >
            Integrate Macro Trends, Fundamental Insights, and Technical Signals — All in One Place.
          </Paragraph>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/macro">
              <Button 
                type="primary" 
                size="large" 
                icon={<PlayCircleOutlined />}
                style={{ 
                  background: '#fff',
                  borderColor: '#fff',
                  color: '#1890ff',
                  fontWeight: 'bold',
                  height: '50px',
                  padding: '0 2rem',
                  margin: '1rem 0.5rem 2rem 0',
                  fontSize: '1.1rem'
                }}
              >
                View Demo
              </Button>
            </Link>
            <Link to="/macro">
              <Button 
                size="large" 
                icon={<RocketOutlined />}
                style={{ 
                  background: 'transparent',
                  borderColor: '#fff',
                  color: '#fff',
                  fontWeight: 'bold',
                  height: '50px',
                  padding: '0 2rem',
                  margin: '1rem 0 2rem 0.5rem',
                  fontSize: '1.1rem',
                }}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div style={{ padding: '4rem 0', background: '#fafafa' }}>
        <div style={{ margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Title level={2} style={{ marginBottom: '1rem' }}>
              Powerful Features
            </Title>
            <Paragraph style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Discover the comprehensive tools and capabilities that make our dashboard the perfect choice for your analytics needs.
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card
                style={{ 
                  height: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
                bodyStyle={{ padding: '2rem' }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #1890ff 0%, #722ed1 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <LineChartOutlined style={{ fontSize: '24px', color: '#fff' }} />
                </div>
                <Title level={4} style={{ marginBottom: '1rem' }}>Macro Analysis</Title>
                <Paragraph style={{ color: '#666', lineHeight: 1.6 }}>
                  Predict economic recessions through leading macro indicators.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card
                style={{ 
                  height: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
                bodyStyle={{ padding: '2rem' }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #722ed1 0%, #eb2f96 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <ProfileOutlined style={{ fontSize: '24px', color: '#fff' }} />
                </div>
                <Title level={4} style={{ marginBottom: '1rem' }}> Fundamental Analysis</Title>
                <Paragraph style={{ color: '#666', lineHeight: 1.6 }}>
                  Access the latest fundamentals with AI-generated financial reports.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card
                style={{ 
                  height: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
                bodyStyle={{ padding: '2rem' }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #52c41a 0%, #1890ff 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <StockOutlined style={{ fontSize: '24px', color: '#fff' }} />
                </div>
                <Title level={4} style={{ marginBottom: '1rem' }}>Technical Analysis</Title>
                <Paragraph style={{ color: '#666', lineHeight: 1.6 }}>
                  Identify trading signals with advanced technical charting tools.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      {/* Call to Action */}
      <div style={{
        background: 'linear-gradient(135deg, #1890ff 0%, #722ed1 100%)',
        padding: '2rem 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <Title level={2} style={{ color: '#fff', marginBottom: '1rem' }}>
            Ready to Get Started?
          </Title>
          <Paragraph style={{ color: '#b3d9ff', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Join thousands of professionals who trust our platform for their analytics and reporting needs.
          </Paragraph>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/macro">
              <Button 
                type="primary" 
                size="large" 
                icon={<PlayCircleOutlined />}
                style={{ 
                  background: '#fff',
                  borderColor: '#fff',
                  color: '#1890ff',
                  fontWeight: 'bold',
                  height: '50px',
                  padding: '0 2rem',
                  margin: '1rem 0.5rem 1.5rem 0',
                  fontSize: '1.1rem'
                }}
              >
                Try Demo Now
              </Button>
            </Link>
            <Button 
              size="large" 
              style={{ 
                background: 'transparent',
                borderColor: '#fff',
                color: '#fff',
                fontWeight: 'bold',
                height: '50px',
                padding: '0 2rem',
                margin: '1rem 0 1.5rem 0.5rem',
                fontSize: '1.1rem'
              }}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}