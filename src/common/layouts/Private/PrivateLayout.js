import { Layout } from 'antd';
import PrivateHeader from './components/Header/Header'
import PrivateBreadcrumb from './components/Breadcrumb/Breadcrumb'
import Footer from './components/Footer/Footer'

const { Content } = Layout;

const PrivateLayout = ({ children }) => {



    return (
        <Layout className="layout">
            <PrivateHeader />
            <Content className='private-content-layout'>
                <PrivateBreadcrumb />
                <div className="private-container-layout">
                    {children}
                </div>
            </Content>
            {/* <Footer /> */}
        </Layout>
    )
}

export default PrivateLayout