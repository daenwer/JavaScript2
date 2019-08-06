import React from 'react';

export let animals = [];

class Animal{
    constructor(name, owner, date, time, content) {
        this.name = name;
        this.owner = owner;
        this.date = date;
        this.time = time;
        this.content = content;
    }
}


class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            owner: '',
            date: '',
            time: '',
            content: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {

        animals.push(new Animal(
            this.state.name,
            this.state.owner,
            this.state.date,
            this.state.time,
            this.state.content
            )
        );

        e.preventDefault();
        console.log(animals);

    }


    render() {
        return (
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Имя животного</label>
                    <div className="col-sm-10">
                        <input type="text" placeholder="Имя" className="form-control"
                               name="name" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Владелец</label>
                    <div className="col-sm-10">
                        <input type="text" placeholder="Владелец" className="form-control"
                               name="owner" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Дата</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control"
                               name="date" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Время</label>
                    <div className="col-sm-10">
                        <input type="time" className="form-control"
                               name="time" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Заметки</label>
                    <div className="col-sm-10">
                        <textarea placeholder="Заметки" className="form-control"
                                  name="content" onChange={this.handleChange}></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <input type="submit" className="btn btn-primary"
                               value="Добавить" onClick={this.handleSubmit}/>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form;
// export default animals