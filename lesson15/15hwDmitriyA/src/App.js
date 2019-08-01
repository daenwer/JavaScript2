import React from 'react';
import Form from './Form';
import Settings from "./Settings";
import PetsList from "./PetsList";


function App() {
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col-8 offset-2">

                    <Form />
                    <Settings/>
                    <PetsList/>


                </div>
            </div>
        </div>
    )
}

export default App;