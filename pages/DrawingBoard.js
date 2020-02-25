// pages/DrawingBoard.js

import "../styles.less";
import React, { Component } from 'react';
import { render } from 'react-dom';

import { Stage, Layer, Star, Text, Line } from 'react-konva';
import Konva from 'konva';
import MainHeader from './Header';


export default class DrawingBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPaint: false,
            lines: [],
            mode: 'brush'
        }
    }

    handleMouseDown = e => {
        this.setState({
            isPaint: true
        });
        var pos = e.currentTarget.getPointerPosition();
        const line = [<Line stroke='#df4b26' strokeWidth={5} mode='brush' points={[pos.x, pos.y]} globalCompositeOperation='source-over'></Line>];
        this.setState(state => {
            const lines = state.lines.concat(line);
            return {
                lines
            };
        });
    };

    handleMouseMove = (e) => {
        if (!this.state.isPaint) { return }
        const pos = e.currentTarget.getPointerPosition();
        const lines = this.state.lines; // An array of lines
        const lastLine = lines.pop(); // Grabs the last line

        const newPoints = lastLine.props.points.concat([pos.x, pos.y]);
        this.setState({
            lines: lines.concat([<Line stroke='#df4b26' strokeWidth={5} mode='brush' points={newPoints} globalCompositeOperation='source-over'></Line>])
        });
        e.currentTarget.children[0].batchDraw();
    }


    handleMouseUp = (e) => {
        this.setState({
            isPaint: false
        });

    }
    // stage.on('mousedown touchstart', function(e) {
    //   isPaint = true;
    //   var pos = stage.getPointerPosition();
    //   lastLine = new Konva.Line({
    //     stroke: '#df4b26',
    //     strokeWidth: 5,
    //     globalCompositeOperation:
    //       mode === 'brush' ? 'source-over' : 'destination-out',
    //     points: [pos.x, pos.y]
    //   });
    //   layer.add(lastLine);
    // });

    // stage.on('mouseup touchend', function() {
    //   isPaint = false;
    // });


    render() {
        var width = 1000;
        var height = 1000;
        const lines = this.state.lines;
        console.log(lines);
        return (
            <div className='stageDiv'>
                <Stage width={width} height={height} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove}>
                    <Layer >
                        {lines}
                    </Layer>
                </Stage>
            </div>
        )
    }
}