import "../styles.less";
// import Datapoint from './Datapoint';
import {
    Row, Col, Affix
} from 'antd';

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';



export default class LifeTimeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    render() {
        const lineLength = .75 * this.state.width;
        const midpoint = 600 / 2;
        // const x_arr = [75, 340, 540, 630, 840];
        const triggers = ['#t1', '#t2', '#t3', '#t4'];
        const x_arr = [350, 650, 850, 1050];
        const timeline_adjust_right = this.state.width + 50;
        const images = ['fuji', 'adl', 'uw', 'cali', 'wday'];

        const timeline_points = x_arr.map((element, i)  => {
            var down = (i % 2 == 0 ? false : true);
            const x_change = - 1 * timeline_adjust_right;
            return(

                <Controller>
                    <Scene
                    triggerElement={triggers[i]}
                    duration={1000}
                    pin={false}>


                    {(progress) => (
                            <Tween            
                            from={{
                                css: {  },
                                attr: {transform: 'translate(0 0)'},
                                ease: 'Power1',
                                }}
                              to={{
                                css: {opacity: '1'},
                                attr: {transform: 'translate(' + x_change + ' 0)'},
                                ease: 'Strong.easeOut',
                                duration: '100'
                              }}
                              totalProgress={progress}
                              paused>
                        <g id="animate3" >
                            <DataPoint midpoint={midpoint} xPoint={x_arr[i] + timeline_adjust_right} />
                            <DataLine midpoint={midpoint} xPoint={x_arr[i] + timeline_adjust_right} up={down}/>
                            <Image
                                x={x_arr[i] - 33 + timeline_adjust_right} y={midpoint + (down? -155:95)} midpoint={midpoint} href={images[i]}/>   
                        </g> 
                    </Tween>
                    )}
                    </Scene>
                  </Controller>
            )
        });

        console.log(this.state.width);
        return (
            <div>
            <Row>
                {/* <Col span={20} offset={2}> */}
                <Affix offsetTop={300}>
                    <svg width="100%" height={midpoint * 2} >
                    <Controller>
                    <Scene triggerElement="#t1" duration={1000} pin={false}>
                    {(progress) => (
                            <Tween            
                            to={{
                                attr: { x1: '200' },
                                cx: '200'
                              }}       
                              ease="Strong.easeOut"
                              totalProgress={progress}
                              paused>
                            
                        <line className = "timeline" x1={this.state.width * 0.8} y1={midpoint} x2="100%" y2={midpoint} style={{ strokeWidth: 4 }} />
                        <circle className="label-circle" cx={this.state.width * 0.8} cy={midpoint} r='9' />
                        </Tween> 
                    )}
                    </Scene>
                  </Controller>
                        
                        
                        {timeline_points}

                        <Controller>
                    <Scene triggerElement="#t5" duration={2000} pin={false}>
                    {(progress) => (
                            <Tween            
                            from={{
                                attr: { opacity: '0' },
                              }}
                              to={{
                                  attr: {
                                      opacity: '1'
                                  }
                              }}       
                              ease="Strong.easeOut"
                              totalProgress={progress}
                              paused>

                        <text x="95%"  fill="black" fontSize="24px" textAnchor="end">
                            <tspan x="94%" y={midpoint - 100}>From Seattle</tspan>
                            <tspan x="94%" y={midpoint - 70}>living in Oakland,</tspan>
                        </text>

                        <text x="97%"  fill="black" fontSize="24px" textAnchor="end">
                            <tspan x="94%" y={midpoint + 100}>passionate about data science</tspan>
                            <tspan x="94%" y={midpoint + 130}>music, weather forecasting</tspan>
                            <tspan x="94%" y={midpoint + 160}>and all things skiing.</tspan>
                        </text>
                        </Tween>
                         )}
                         </Scene>
                       </Controller>
                    </svg>
                    </Affix>
                {/* </Col> */}
            </Row>
            <Row>
            <Col span={24} style={{height: '100px', top:'-20vh'}}>
                <div id="t1" style={{ color: 'black', fontSize: '20px'}}>
                TRIGGER
                </div>
            </Col>
            </Row>
            
            <Row>
            <Col span={24} style={{height: '200px'}}>
                <div id="t2" style={{ color: 'black', fontSize: '20px'}}/>
                TRIGGER 2/>
                </Col>
            </Row>

            <Row>
            <Col span={24} style={{height: '200px'}}>
                <div id="t3" style={{ color: 'black', fontSize: '20px'}}/>
                TRIGGER 3/>
                </Col>
            </Row>

            <Row>
            <Col span={24} style={{height: '500px'}}>
                <div id="t4" style={{ color: 'black', fontSize: '20px'}}/>
                TRIGGER 4/>
                </Col>
            </Row>
            <Row>
            <Col span={24} style={{height: '1000px'}}>
                <div id="t5" style={{ color: 'black', fontSize: '20px'}}/>
                TRIGGER 5/>
                </Col>
            </Row>
            </div>
        )
    }
}


function DataPoint(props) {
    return (
        <circle className="label-circle" cx={props.xPoint} cy={props.midpoint} r='9' />
    );
}

function DataLine(props) {
    return (
        <line className="label-line-color"
            x1={props.xPoint}
            y1={props.midpoint}
            x2={props.xPoint} 
            y2={props.up ? props.midpoint - 85: props.midpoint + 85} 
            style={{ strokeWidth: 3, strokeDasharray: 4 }} />
    );
}

function Image(props) {
    return (
        <image x={props.x} y={props.y} width='66px' height='66px' href={'/images/' + props.href + '.png'}> </image>
    )
}


