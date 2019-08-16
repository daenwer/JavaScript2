import React from 'react';

import Button from './Button';
import Shape from "./Shape";
import {selectionColor} from "./Sandbox"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrShape: [],
            widthWindow: innerWidth,
            heightWindow: innerHeight,
            uniqueId: 0,
            addShape: false,
        };
        this.remove = this.remove.bind(this);
        // this.selectionColor = this.selectionColor.bind(this);
        this.selectionShape = this.selectionShape.bind(this);
        this.create = this.create.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(id) {
        const idShape = id;
        console.log('idShape = ', idShape);
        const newColor = selectionColor();
        let newArrShape = this.state.arrShape.slice();
        newArrShape.forEach(function (item, id) {

            if (id === idShape) {
                item.color = newColor;
            }
        });
        this.setState({arrShape: newArrShape})
    }

    remove(e) {
        e.stopPropagation();
        // TODO: почитать что это
        // e.nativeEvent.stopImmediatePropagation();
        this.setState({arrShape: []});
    }

    selectionShape(x, y) {
        console.log('addShape');
        const xMouse = x;
        const yMouse = y;
        const widthWindow = this.state.widthWindow;
        const heightWindow = this.state.heightWindow;
        if (xMouse >= widthWindow / 2 && yMouse >= heightWindow / 2) {        // Низ-лево
            return 'oval';
        } else if (xMouse >= widthWindow / 2 && yMouse <= heightWindow / 2) { // Верх - лево
            return 'square';
        } else if (xMouse < widthWindow / 2 && yMouse > heightWindow / 2) {   // Низ - право
            return 'parallelogram';
        } else {                                                              // Верх - право
            return 'circle';
        }
    }

    create(e, xMouse=null, yMouse=null) {

        const shape = {};
        let x = null;
        let y = null;
        if (xMouse && yMouse) {
            x = xMouse;
            y = yMouse;
        } else {
            x = e.pageX;
            y = e.pageY;
        }
        // TODO: добавить проверку на расстояние до края экрана
        shape['x'] = x;
        shape['y'] = y;
        shape['class'] = this.selectionShape(x, y);
        this.setState({uniqueId: this.state.uniqueId + 1});
        shape['id'] = this.state.uniqueId;
        shape['color'] = selectionColor();
        shape['blinking'] = false;
        let newArrShape = this.state.arrShape.slice();
        newArrShape.push(shape);
        this.setState({arrShape: newArrShape});
    }

    render() {
        console.log(this.state.arrShape);
        return (
            <div style={{height: '100vh'}} onClick={this.create}>
                <Button remove={this.remove} create={this.create}
                        widthWindow={this.state.widthWindow} heightWindow={this.state.heightWindow}/>
                {this.state.arrShape.map(shape => (
                    <Shape key={shape.id} {...shape} changeColor={this.changeColor}/>
                ))}
            </div>
        )
    }
}

export default App;