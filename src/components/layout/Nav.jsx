import { Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

function Nav() {
  const location = useLocation();
  const current = location.pathname.toLowerCase();

  return (
    <div className="homepage">
      <div className="homepage-nav">
        <div className="homepage-logo">
          <NavLink to="/">
            <div className="homepage-logo-content">
              <img src={logo} alt="logo" />
              <span>Port AI</span>
            </div>
          </NavLink>
        </div>
        <Menu
          mode="horizontal"
          selectedKeys={[current]}
          className="homepage-menu"
        >
          <Menu.Item key="1">
            <NavLink to="/macro">
              <span style={{ marginLeft: 8 }}>Product</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            {/* <NavLink to="/sign-in"> */}
              <span className="label">Contact</span>
            {/* </NavLink> */}
          </Menu.Item>
          <Menu.Item key="3">
            {/* <NavLink to="/sign-in"> */}
              <span className="label">Login</span>
            {/* </NavLink> */}
          </Menu.Item>
          <Menu.Item key="4">
            {/* <NavLink to="/sign-up"> */}
              <span className="get-started-btn">Get Started</span>
            {/* </NavLink> */}
            </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default Nav;
