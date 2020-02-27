import { PageHeader, Button, Row, Col } from 'antd';
import Link from 'next/link';
import { Typography } from 'antd';
const { Title } = Typography;

export default function Header() {
    return (
        <Row justify="space-around" type="flex" className='top'>
            {/* <Col  span={20} style={{ paddingTop: '68px', paddingBottom: '30px', minHeight: '100px' }}> */}
                <PageHeader
                    style={{ position: 'fixed', zIndex: 1, width: '80%', marginTop: '90px', paddingBottom: '30px', minHeight: '120px'}}
                    className='header'
                    backIcon={<Link href='/'><Title id='header' color='highlight-color'>Calvin Korver</Title></Link>}
                    onBack={() => null}
                    ghost={false}
                    extra={[
                        <Link href='/network' key="2">
                            <a>
                                <Button size="large">
                                    Neural Networks
                                </Button>
                            </a>
                        </Link>,
                        <Link href='/resume' key="1">
                            <a>
                                <Button type="primary" id="resume" size="large">
                                    Resume
                                </Button>
                            </a>
                        </Link>,
                        <Link href='/gmail' key='3'>
                            <a href="">
                                <img class="menu-icon" src="/images/gmail.png" alt=""/>

                            </a>
                        </Link>,

                        <Link href='/linkedin' key='4'>
                            <a href="">
                                <img class="menu-icon" src="/images/linkedin.png" alt=""/>
                            </a>
                        </Link>
                    ]}
                >
                </PageHeader>
            {/* </Col> */}
        </Row >
    )
}

