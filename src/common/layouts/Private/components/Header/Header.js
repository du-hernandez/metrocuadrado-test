import { Layout, Menu } from 'antd';
import {
    StarOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';

const { Header } = Layout;

const PrivateHeader = () => {
    return (
        <Header className='private-header-layout'>
            <div className='slogan'><p>ET Fashion</p></div>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">About</Menu.Item>
                <Menu.Item key="3">Contact us</Menu.Item>
            </Menu>
            <div className='notifications-area'>
                <p className='favorites'><StarOutlined /></p>
                <p><ShoppingCartOutlined /></p>
            </div>
        </Header>
    )
}

export default PrivateHeader