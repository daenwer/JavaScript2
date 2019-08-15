import React from 'react';

class AutoAddShapes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addShape: true,
            name: 'Add On',
        };

        this.autoAddShape = this.autoAddShape.bind(this);
        this.startAutoAdd = this.startAutoAdd.bind(this);
        this.stopAutoAdd = this.stopAutoAdd.bind(this);
        this.callCreate = this.callCreate.bind(this);
    }

    startAutoAdd() {
        this.intervalId = setInterval(printLog => this.callCreate(), 1000);
    }

    stopAutoAdd() {
        clearInterval(this.intervalId);
    }

    callCreate(e) {
        const x = Math.floor(Math.random() * (this.props.widthWindow - 80)) + 40;
        const y = Math.floor(Math.random() * (this.props.heightWindow - 160)) + 80;
        this.props.create(e, x, y);
    }

    autoAddShape(e) {
        e.stopPropagation();
        if (this.state.addShape) {
            this.startAutoAdd();
            this.setState({
                addShape: !this.state.addShape, name: 'Add Off'
            })
        } else {
            this.stopAutoAdd();
            this.setState({
                addShape: !this.state.addShape, name: 'Add On'
            })
        }
    }

    render() {
        return (
            <>
                <button type="button" className="btn btn-primary btn-sm m-1 mt-2 red" onClick={this.autoAddShape}>
                    {this.state.name}
                </button>
            </>
        )
    }
}

export default AutoAddShapes;