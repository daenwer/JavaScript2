import React from 'react';


// import WeatherToday from './WeatherToday';
// import WeaterOther from './WeaterOther';
// // import Settings from './Settings';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weathers: [],
            city: '',
            country: '',
            uniqueId: 1,
        };
    }

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
            <div></div>
        )
    }
}

export default App;