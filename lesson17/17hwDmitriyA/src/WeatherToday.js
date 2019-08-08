import React from 'react';

function WeatherToday(props) {

    const weatherToday = props.weathers;
    // alert(JSON.stringify(weatherToday, null, 4));

    let temp = 'VVVVVVVV';

    if (props.weathers) {
        console.log('AAAAAAAAAAAAAAAAAAAA');
        console.log(String(props.weathers.dateTime));
        let temp = String(props.weathers.temp);
        console.log(temp);
        // let temp = String(props.weathers.temp);

        // let { dateTime, temp, weatherDescriptions, weatherIcon, windDeg, windSpeed } = props.weathers;
        // let temp = props.weathers.temp;
    } else {
        console.log('BBBBBBBBBBBBBBBBBBBB');
        let temp = 'VVVVVVVV'
        // let dateTime = 'AAAAAA';
        // let temp = 'BBBBBBBBB';
        // let weatherDescriptions = 'CCCCCCCCCCC';
        // let weatherIcon = 'EEEEEEEEEEEE';
        // let windDeg = 'FFFFFFFFFFF';
        // let windSpeed ='GGGGGGGGGGG';
    }

    return (
        <ul className="list">
            <div>
                <li>
                    { JSON.stringify(props.weathers, null, 4) }
                    {/*{ [...props.weathers] }*/}
                </li>
            </div>
            {/*{animals.map(animal => (*/}
            {/*    <PetItem key={animal.id} {...animal} removeAnimal={props.removeAnimal} />*/}
            {/*    ))}*/}
        </ul>
    )
}



// class WeatherToday extends React.Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             weather: this.props.weathers
//         };
//
//         // this.handleChange = this.handleChange.bind(this);
//         // this.handleSubmit = this.handleSubmit.bind(this);
//
//         console.log(this.props.weathers)
//     }
//     //
//     // handleChange(e) {
//     //     const {name, value} = e.target;
//     //     this.setState({ [name]: value });
//     // }
//     //
//     // handleSubmit(e) {
//     //     e.preventDefault();
//     //     const { name, owner, date, time, content } = this.state;
//     //     const animal = { name, owner, date, time, content };
//     //     this.props.addAnimal(animal);
//     //     e.target.reset();
//     // }
//
//
//
//     render() {
//         return (
//             <div>
//                 <h1>
//                     Hello
//                     { JSON.stringify(this.state.weather, null, 4) }
//                 </h1>
//             </div>
//         )
//     }
// }

export default WeatherToday;
