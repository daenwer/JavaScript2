import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fio: '',
      age: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // console.log(e.target, e.target.name, e.target.value);

    // const name = e.target.name;
    // const value = e.target.value;
    // // или
    const { name, value } = e.target;
    
    // var object = {};
    // object[name] = value;
    // this.setState(object); 
    // или
    this.setState({ [name]: value }); // -> render
  }

  handleSubmit(e) {
    // 1 отменить обновление страницы
    e.preventDefault();

    // 2 залесть в стейт за данными
    // const fio = this.state.fio;
    // const age = this.state.age;
    // или
    const { fio, age } = this.state;

    // 3 сложить их в объект
    const person = { fio, age };

    // 4 запушить в массив (метод пришел снаружи (из компоненты App))
    this.props.addPerson(person);

    // 5 очистить форму
    e.target.reset();
  }

  render() {
    console.log(this);
    
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="fio" placeholder="ФИО" onChange={this.handleChange} />
        <input name="age" placeholder="Возраст" onChange={this.handleChange} />
        <button>Добавить в базу</button>
      </form>
    )
  }
}

export default Form;