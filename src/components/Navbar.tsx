import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import GoalsProgress from "./GoalsProgress";

const Navbar = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        items={[
          { key: '/', label: (<Link to="/">Home</Link>) },
          { key: '/goals', label: (<Link to="/goals">Goals</Link>) }
        ]}
      />
      <GoalsProgress />
    </Header>
  );
}

export default Navbar;
