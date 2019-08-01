import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';
import Form from './Form';

function App() {
    return (
        <div className="container">
            <Counter title="Великолепный счетчик"/>
            <Form/>
        </div>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);