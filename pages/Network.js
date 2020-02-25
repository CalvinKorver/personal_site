import { Component } from "react";
import DrawingBoard from './DrawingBoard';
import { Row, Col } from 'antd';
import MainHeader from './MainHeader';

export default class Network extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <MainHeader/>
                <Row justify="space-around" type="flex" className='top'>
                    <Col span={16} style={{ paddingTop: '30px', paddingBottom: '30px', minHeight: '100px' }}>
                        <h3>" Canvas " </h3>
                        <DrawingBoard />
                    </Col>
                </Row>
            </div>


        );
    }
}