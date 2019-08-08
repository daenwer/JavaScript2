import React from 'react';


import WeatherToday from './WeatherToday';
import WeaterOther from './WeaterOther';
// import Settings from './Settings';

class WeatherApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weathers: []
        };
    }

    componentDidMount() {
        const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Minsk,by&APPID=b98b606e9fb1832fd8ccdf53758978fc';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let resultData = [];
                for (let i=0; i < 40; i += 8) {
                    resultData.push(this.getData(data, i));
                }
                this.setState({weathers: resultData});
                console.log(resultData);
            })
    }

    getData(object, num) {
        let result = {};
        result['id'] = num;
        result['dateTime'] = object.list[num]['dt_txt'];
        // result['time'] = object.list[num]['dt_txt'].split(' ')[1];
        result['temp'] = (object.list[num].main.temp-273.15).toFixed(2);
        result['weatherDescriptions'] = object.list[num].weather[0].main;
        result['weatherIcon'] = object.list[num].weather[0].icon;
        result['windDeg'] = object.list[num].wind.deg;
        result['windSpeed'] = object.list[num].wind.speed;
        return result;
    }

    render() {

        return (
            <div className="container pt-3">
                <div className="row">
                    <div className="col-3 offset-4">
                        <WeatherToday weathers={this.state.weathers[0]}/>
                        {/*<WeaterOther weathers={this.state.weathers}/>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherApp;