import React from 'react';

import Button from './Button';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrFigure: [],
        };
        this.remove = this.remove.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    remove() {
        this.setState({arrFigure: []});
        console.log(this.state)
    }

    changeColor() {
        this.setState({arrFigure: [1, 2, 3]});
        console.log(this.state)
    }

    componentDidMount() {
        window.addEventListener('mousedown', this.pageClick, false);
        // window.addEventListener('mousedown', this.hand, false);
    }

    pageClick(e) {

        const domNode = ReactDOM.findDOMNode(this);
        // const domNode = findDOMNode(this);

        // if (e.toElement == 123) {console.log(111)}
        if ((!domNode || !domNode.contains(event.target))) {
            console.log('Все заехоршо!')
        } else {
            console.log('Не очень!!!')
        }


    }

    // // document.documentElement.onclick = function(e) {
    // handleClick {
    //     const mouseX = e.clientX;
    //     const mouseY = e.clientY;
    //
    //     if (mouseX <= wWidth / 2 && mouseY <= wHeight / 2) {
    //         console.log("1й сектор");
    //     } else if (mouseX > wWidth / 2 && mouseY <= wHeight / 2) {
    //         console.log("2й сектор");
    //     } else if (mouseX <= wWidth / 2 && mouseY > wHeight / 2) {
    //         console.log("3й сектор");
    //     } else {
    //         console.log("4й сектор");
    //     }
    // }


    // componentDidMount() {
    //     const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Minsk,by&APPID=b98b606e9fb1832fd8ccdf53758978fc';
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             let resultData = [];
    //
    //             const city = data.city.name;
    //             const country = data.city.country;
    //
    //             for (let i=0; i < 40; i += 8) {
    //                 resultData.push(this.getData(data, i));
    //             }
    //             this.setState({weathers: resultData, city: city, country: country});
    //         })
    // }
    //
    // getData(object, num) {
    //     let result = {};
    //     result['dateTime'] = object.list[num]['dt_txt'].slice(5, 16);
    //     result['time'] = object.list[num]['dt_txt'].split(' ')[1];
    //     result['temp'] = (object.list[num].main.temp-273.15).toFixed(0);
    //     result['weatherDescriptions'] = object.list[num].weather[0].main;
    //     result['weatherIcon'] = object.list[num].weather[0].icon;
    //     result['windDeg'] = object.list[num].wind.deg;
    //     result['windSpeed'] = object.list[num].wind.speed;
    //     this.setState({uniqueId: this.state.uniqueId + 1});
    //     result['id'] = this.state.uniqueId;
    //     return result;
    // }

    render() {
        return (
            <div>
                <Button remove={this.remove} changeColor={this.changeColor}/>

                {/*<div className="col-3 offset-4 weatherapp">*/}
                {/*    <WeatherToday weathers={this.state.weathers[0]} city={this.state.city} country={this.state.country}/>*/}
                {/*    <WeaterOther weathers={this.state.weathers}/>*/}
                {/*</div>*/}

            </div>
        )
    }
}

export default App;