import React from 'react';


class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fio: '',
            age: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // console.log(e.target.name, e.target.value);

        const {name, value} = e.target;
        this.setState({[name]: value});

        // this.setState({ [e.target.nackCount] : e.target.value });
    }


    render() {
        return (

            <form>
                <input name='fio' placeholder="ФИО" onChange={this.handleChange}/>
                <input name='age' placeholder="Возраст" onChange={this.handleChange}/>
                <button>Добавить в базу</button>
            </form>
        )
    }
}

export default Form;