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
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { fio, age } = this.state;

    const person = { fio, age };

    this.props.addPerson(person);

    e.target.reset();
  }

  render() {
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