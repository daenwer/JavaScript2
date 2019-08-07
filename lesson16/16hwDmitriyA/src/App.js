import React from 'react';

import Form from './Form';
import Settings from './Settings';
import PetsList from './PetsList';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [
                {
                    name: 'Cat',
                    owner: 'Vasya',
                    date: '13.01.2018',
                    time: '15:00',
                    content: 'Beautiful cat',
                },
                {
                    name: 'Dog',
                    owner: 'Masha',
                    date: '10.10.2015',
                    time: '13:00',
                    content: 'Mad dog',
                },
            ],
            uniqueId: 1,
            search: '',
            sort: 'no',
        };

        this.addAnimal = this.addAnimal.bind(this);
        this.removeAnimal = this.removeAnimal.bind(this);
        this.liftData = this.liftData.bind(this);
    }

    addAnimal(animal) {

        console.log(this.state.animals);
        console.log(animal);

        const copyAnimal = {...animal, id: this.state.uniqueId};
        const copy = [...this.state.animals, copyAnimal];
        this.setState({animals: copy, uniqueId: this.state.uniqueId + 1});
    }

    removeAnimal(id) {

        const copy = this.state.animals.filter(
            animal => animal.id !== id
        );

        this.setState({ animals: copy });
    }

    liftData(name, value) {
        this.setState({[name]: value});
    }

    render() {
        const { search, sort } = this.state;

        let copy = [ ...this.state.animals ];

        if (search) {
            copy = copy.filter(animal => animal.name.toLowerCase().includes(search.toLowerCase()));
        }

        if (sort === 'az') {
            copy.sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                }
                return -1
            });
        } else if (sort === 'za') {
            copy.sort((a, b) => {
                if (a.name > b.name) {
                    return -1
                }
                return 1
            });
        }

        return (
            <div className="container pt-3">
                <div className="row">
                    <div className="col-8 offset-2">
                        <Form addAnimal={this.addAnimal}/>
                        <Settings liftData={this.liftData}/>
                        <PetsList animals={copy} removeAnimal={this.removeAnimal}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;