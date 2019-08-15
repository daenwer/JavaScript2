import React from 'react';

import Button from './Button';
import Shape from "./Shape";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrShape: [],
            widthWindow: innerWidth,
            heightWindow: innerHeight,
            uniqueId: 1,
            addShape: false,
        };
        this.remove = this.remove.bind(this);
        this.selectionColor = this.selectionColor.bind(this);
        this.selectionShape = this.selectionShape.bind(this);
        this.create = this.create.bind(this);
    }

    remove(e) {
        e.stopPropagation();
        // TODO: почитать что это
        // e.nativeEvent.stopImmediatePropagation();
        this.setState({arrShape: []});
    }

    //TODO: может быть статическим методом
    selectionColor() {
        const randomColor = 'rgb(' + Math.floor(Math.random() * (256)) + ',' +
            Math.floor(Math.random() * (256)) + ',' +
            Math.floor(Math.random() * (256)) + ')';
        return randomColor;
    }

    selectionShape(x, y) {
        console.log('addShape');
        const xMouse = x;
        const yMouse = y;
        const widthWindow = this.state.widthWindow;
        const heightWindow = this.state.heightWindow;
        if (xMouse >= widthWindow / 2 && yMouse >= heightWindow / 2) {        // Низ-лево
            return 'rhombus';
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
        shape['color'] = this.selectionColor();
        shape['blinking'] = false;
        let newArrShape = this.state.arrShape.slice();
        newArrShape.push(shape);
        this.setState({arrShape: newArrShape});
    }

    render() {
        console.log(this.state.arrShape);
        return (
            <div style={{height: '100vh'}} onClick={this.create}>
            {/*<div style={{height: '100vh'}}>*/}
                <Button remove={this.remove} autoAddShapes={this.autoAddShape} create={this.create}
                        widthWindow={this.state.widthWindow} heightWindow={this.state.heightWindow}/>
                {this.state.arrShape.map(shape => (
                    <Shape key={shape.id} {...shape}/>
                ))}
            </div>
        )
    }
}

export default App;