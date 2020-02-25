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
        const triggers = ['#t1', '#t2']
        const x_arr = [1200, 1300];
        const timeline_end_x = 1500;

        const timeline_points = x_arr.map((element, i)  => {
            var down = (i % 2 == 0 ? false : true);
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
                                attr: {transform: 'translate(-800 0)'},
                                ease: 'Strong.easeOut',
                                duration: '100'
                              }}
                              totalProgress={progress}
                              paused>
                        <g id="animate3" >
                            <DataPoint midpoint={midpoint} xPoint={x_arr[i]} />
                            <DataLine midpoint={midpoint} xPoint={x_arr[i]} up={down}/>
                            <Image x={x_arr[i] - 30} y={midpoint + (down? -150:90)} midpoint={midpoint}/>   
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
                            
                        <line className = "timeline" x1={this.state.width * 0.7} y1={midpoint} x2="100%" y2={midpoint} style={{ strokeWidth: 4 }} />
                        <circle className="label-circle" cx={this.state.width * 0.7} cy={midpoint} r='9' />
                        </Tween> 
                    )}
                    </Scene>
                  </Controller>
                        
                        
                        {timeline_points}

                        {/* <text x="95%" y="50" fill="black" fontSize="24px" textAnchor="end">
                            <tspan x="95%" y="60">living in Oakland, CA. </tspan>
                            <tspan x="95%" y="90">from Seattle. </tspan>
                        </text>

                        <text x="97%" y={midpoint * 2 + 30} fill="black" fontSize="24px" textAnchor="end">
                            <tspan x="97%" y={400 - 70}>passionate about data science, music,</tspan>
                            <tspan x="97%" y={400 - 40}>weather, and all things skiing.</tspan>
                        </text> */}
                    </svg>
                    </Affix>
                {/* </Col> */}
            </Row>
            <Row>
            <Col span={24} style={{height: '1000px'}}>
                <div id="t1" />
                </Col>
                <Col span={24} style={{height: '500px'}}>
                <div id="t2" />
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
        <rect x={props.x} y={props.y} width="60" height="60" style={{ strokeWidth: 1, stroke: 'black', strokeDasharray: 4, fill: 'white'}}/>
    )
}


