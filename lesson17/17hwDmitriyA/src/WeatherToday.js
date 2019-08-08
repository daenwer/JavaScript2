import React from 'react';

function WeatherToday(props) {

    let data = {};

    if (!props.weathers) {
        return (
            <div>Loading...</div>
        )
    } else {
        data = props.weathers;
    }

    return (
        <ul className="list">
            <div>
                <li>
                    {data.dateTime}
                    {data.time}
                    {data.temp}
                    {data.weatherDescriptions}
                    {data.weatherIcon}
                    {data.windDeg}
                    {data.windSpeed}
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
