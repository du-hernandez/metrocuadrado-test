import { Layout, Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom'
import { MapRouteBreaks } from '../../utils'
import PrivateHeader from './components/Header/Header'
import PrivateBreadcrumb from './components/Breadcrumb/Breadcrumb'

const { Content, Footer } = Layout;

const PrivateLayout = ({ children }) => {

    const location = useLocation()

    const mapRoutes = MapRouteBreaks(location.pathname, '/')

    return (
        <Layout className="layout">
            <PrivateHeader />
            <Content className='private-content-layout'>
                <PrivateBreadcrumb />
                <div className="">
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Footer</Footer>
        </Layout>
    )
}

export default PrivateLayout