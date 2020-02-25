import Header from './Header';
import {Row, Col} from 'antd';
import TweenComponent from './TweenComponent';

export default function Resume() {
    return (
        <div>
            <Header />
            <Row justify="space-around" type="flex" className='top'>
                <Col span={16} style={{ paddingTop: '30px', paddingBottom: '30px', minHeight: '100px' }}>
                    <TweenComponent/>
                </Col>
            </Row>
        </div>
    )
}