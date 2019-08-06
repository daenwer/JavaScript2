import React from 'react';

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
        <Form addPerson={this.addPerson} />
        <List persons={this.state.persons} removePerson={this.removePerson} />
      </div>
    )
  }
}

export default App;