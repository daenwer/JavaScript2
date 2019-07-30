import React from 'react';
import Item from './Item';

let schoolsData = [
    {
        id: 1,
        name: 'Myfreedom',
        text: 'Школа №1'
    },
    {
        id: 10,
        name: 'Belhard',
        text: 'Школа №2'
    },
    {
        id: 20,
        name: 'Шаг',
        text: 'Школа №3'
    }
];

function List() {
    return (
        <div>
            {schoolsData.map(school => {
                return (
                    <Item key={school.id} name={school.name} text={school.text}/>
                )
            })}
        </div>
    );
}

export default List;