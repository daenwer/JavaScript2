import React from 'react';

import Form from './Form';
import Settings from './Settings';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
          {id: 1, fio: 'Женя', age: 100},
          {id: 2, fio: 'Таня', age: 80},
          {id: 3, fio: 'Вася', age: 10}
        ],
      uniqueId: 1,
      search: '',
      sort: 'no',
    };

    this.addPerson = this.addPerson.bind(this);
    this.removePerson = this.removePerson.bind(this);
    this.liftData = this.liftData.bind(this);
  }

  addPerson(person) {
    const copyPerson = { ...person, id: this.state.uniqueId };

    const copy = [...this.state.persons, copyPerson];
    this.setState({ persons: copy, uniqueId: this.state.uniqueId + 1 });
  }

  removePerson(id) {
    // const copy = [...this.state.persons];
    // const index = copy.findIndex(person => person.id === id);
    // copy.splice(index, 1);

    const copy = this.state.persons.filter(
        person => person.id !== id
    );

    this.setState({ persons: copy });
  }

  liftData(name, value) {
    console.log(name, value, 'смотрим в компоненте App');

    this.setState({ [name]: value });
  }

  render() {
    console.log(this.state);

    const { search, sort } = this.state;

    let copy = [ ...this.state.persons ];

    if (search) {
      copy = copy.filter(person => person.fio.toLowerCase().includes(search.toLowerCase()));
    }

    if (sort === 'az') {
      copy.sort((a, b) => {
        if(a.fio >  b.fio) {
          return 1
        }
        return -1
      });
    } else if (sort === 'za') {
      copy.sort((a, b) => {
        if(a.fio >  b.fio) {
          return -1
        }
        return 1
      });
    }

    return (
      <div className="container">
        <Form addPerson={this.addPerson} />
        <Settings liftData={this.liftData} />
        <List persons={copy} removePerson={this.removePerson} />
      </div>
    )
  }
}

export default App;