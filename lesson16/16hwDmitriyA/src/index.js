import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';
import Form from './Form';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { persons: [] };

    this.addPerson = this.addPerson.bind(this);
    this.removePerson = this.removePerson.bind(this);
  }

  addPerson(person) {
    // this.state
    // this.state.persons // []
    // this.state.persons.push(person); // нельзя, это мутация

    // const copy = [...this.state.persons];
    // copy.push(person);
    // this.setState({ persons: copy });
    // или
    const copy = [...this.state.persons, person];
    this.setState({ persons: copy });
  }

  removePerson(index) {
    const copy = [...this.state.persons];
    copy.splice(index, 1);
    this.setState({ persons: copy });
  }
  
  render() {
    return (
      <div className="container">
        <Counter title="Великолепный счетчик" />
        <Form addPerson={this.addPerson} />
        <List persons={this.state.persons} removePerson={this.removePerson} />
      </div>
    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);