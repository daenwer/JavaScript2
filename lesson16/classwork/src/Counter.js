// props - данные, но их изменять нельзя
// state - данные, но их изменять можно

import React from 'react';

// изменять данные
// внутренние

// классовые

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };

        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);

        console.log("компонента создается (constructor)")
    }

    // собственные методы
    add() {
        let value = this.state.value;

        // this.state.value++; // мутация, так нельзя

        // обновление стейта
        this.setState({value: value + 1}); // -> render
    }

    minus() {
        this.setState({value: this.state.value - 1}); // -> render
    }

    render() {
        console.log("компонента отрисована (render)");
        console.log(this);

        return (
            <div>
                <h3>{this.props.title}</h3>
                <button onClick={this.add}>Плюс</button>
                {this.state.value}
                <button onClick={this.minus}>Минус</button>
            </div>
        );
    }
}

export default Counter;