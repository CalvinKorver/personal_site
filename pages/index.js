import {
    Breadcrumb,
    Icon,
    Row,
    Col,
    Layout,
    Card,
    Carousel,
} from 'antd';
import Link from 'next/link'
import "../styles.less";
const { Header, Content, } = Layout;
import FrontPage from './FrontPage';

export default () => (
    <Layout>
        <FrontPage />
    </Layout>
)