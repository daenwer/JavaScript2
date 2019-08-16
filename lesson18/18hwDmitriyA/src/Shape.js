import React from 'react';
import {onClick} from './Sandbox'

class Shape extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isBlinking: true,
        };

        this.onDoubleClick = this.onDoubleClick.bind(this);
        this.stickToMouse = this.stickToMouse.bind(this);
    };


    // TODO: дописать перемещение и проверить почему id сбиваются при автоматической генерации
    stickToMouse(e) {
        console.log('я нажал и вожу')
    }

    startAutoBlinking() {
        this.intervalId = setInterval(printLog => this.props.changeColor(this.props.id), 1000);
    }

    stopAutoBlinking() {
        clearInterval(this.intervalId);
    }

    onDoubleClick(e) {
        e.stopPropagation();


        if (this.state.isBlinking) {
            this.startAutoBlinking();
            this.setState({
                isBlinking: !this.state.isBlinking
            })
        } else {
            this.stopAutoBlinking();
            this.setState({
                isBlinking: !this.state.isBlinking
            })
        }
    }

    render() {
        return (
            <div className={this.props.class}
                 style={{background: this.props.color, left: this.props.x, top: this.props.y}}
                 onClick={onClick}
                 onDoubleClick={this.onDoubleClick}
                 onMouseDown={this.stickToMouse}>
                {this.props.id}
            </div>
        )
    }
}

export default Shape;

