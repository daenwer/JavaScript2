import React from 'react';


let animals = [
    {
        name: 'Люси',
        owner: 'Евгений',
        date: '2019-01-01 10:30',
        description: 'сопроводительный текст'
    },
    {
        name: 'Жорик',
        owner: 'Татьяна',
        date: '2019-01-02 20:00',
        description: 'сопроводительный текст'
    },

];

function Petltem() {
    return (
        <>
            {animals.map(animal => {
                return (
                    <li>
                        <div className="float-right">{ animal.date }</div>
                        <h3>
                            <span>{ animal.name }</span>
                            <button className="btn btn-danger btn-sm">Удалить</button>
                        </h3>
                        <h5>{ animal.owner }</h5>
                        <p>{  }</p>
                    </li>
                )
            })}
        </>
    );
}

export default Petltem;