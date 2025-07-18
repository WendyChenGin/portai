import { Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { HomeOutlined, FundOutlined, BarChartOutlined, LineChartOutlined } from '@ant-design/icons';
import logo from "../../assets/images/logo.png";

function Nav() {
  const location = useLocation();
  const current = location.pathname.toLowerCase();

  return (
    <div style={{ background: '#fff', boxShadow: '0 2px 8px #f0f1f2' }}>
      <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}>
        <Menu mode="horizontal" selectedKeys={[current]} theme="light">
          <Menu.Item>
            <NavLink to="/">
              <div className="brand">
                <img 
                  src={logo}
                  alt=""
                  style={{
                    width: '100%',
                    height: 'auto',              
                    maxWidth: '50px',            
                    display: 'block',
                    margin: '0 auto',
                    objectFit: 'contain'
                  }} 
                />
              <span>Port AI</span>
            </div>
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/macro">
              <span style={{ marginLeft: 8 }}>Product</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            {/* <NavLink to="/sign-in"> */}
              <span className="label">Contact</span>
            {/* </NavLink> */}
          </Menu.Item>
          <Menu.Item>
            {/* <NavLink to="/sign-in"> */}
              <span className="label">Login</span>
            {/* </NavLink> */}
          </Menu.Item>
          <Menu.Item key="8">
            {/* <NavLink to="/sign-up"> */}
              <span className="label">Get Started</span>
            {/* </NavLink> */}
            </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default Nav;
