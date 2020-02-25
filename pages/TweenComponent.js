// @flow
import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const TweenStyled = styled.div`
  .section {
    height: 40vh;
  }
  
  
`;

const TweenComponent = () => (
  <TweenStyled>
    <div className="section" />
    <div id="trigger" />
    <Controller>
      <Scene
        triggerElement="#trigger"
        duration={300}
      >
        {(progress) => (
          <Tween            
            to={{
              y: '-50',
            }}       
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >

            <svg width="100%" height={300}>
                <DataPoint midpoint={150} xPoint={75} />
                <DataLine midpoint={150} xPoint={75} up={true} />
                <Image x={75 - 30} y={150 + (true ? -150 : 90)} midpoint={150} />
            </svg>        

          </Tween>    
        )}
      </Scene>
    </Controller>
    <div className="section" />
    <div className="section" />
  </TweenStyled>
);

export default TweenComponent;



function DataPoint(props) {
    return (
        <circle className="label-circle" cx={props.xPoint} cy={props.midpoint} r='9' />
    );
}

function DataLine(props) {
    return (
        <line class="label-line-color"
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
