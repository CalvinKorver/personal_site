import "../styles.less";
import Header from './Header';
import {
    Row, Col, Layout, PageHeader
} from 'antd';
const { Content } = Layout;
import Link from 'next/link';
import LifeTimeline from './LifeTimeline';
import "../styles.less";


export default function FrontPage() {
    

    return (
        <div>
            <Header/>
            <div className="timeline-div">
                <LifeTimeline/>
            </div>
        </div>
    )
}


