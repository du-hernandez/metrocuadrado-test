import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";
import { StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const { Header } = Layout;

const PrivateHeader = () => {
  const history = useHistory();

  const navigate = route => history.push(route)

  return (
    <Header className="private-header-layout">
      <div className="slogan">
        <p>ET Fashion</p>
      </div>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" onClick={()=>navigate('/home')}>Home</Menu.Item>
        <Menu.Item key="2" onClick={()=>navigate('/about')}>About</Menu.Item>
        <Menu.Item key="3" onClick={()=>navigate('/contact_us')}>Contact us</Menu.Item>
      </Menu>
      <div className="notifications-area">
        <p className="favorites">
          <StarOutlined />
        </p>
        <p>
          <ShoppingCartOutlined />
        </p>
      </div>
    </Header>
  );
};

export default PrivateHeader;
