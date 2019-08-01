import React from 'react';
import Item from './Item';


let formField = [
    {
        id: 1,
        name: 'Имя животного',
        text: 'Имя'
    },
    {
        id: 2,
        name: 'Владелец',
        text: 'Владелец'
    },
    {
        id: 3,
        name: 'Дата',
        text: 'дд.мм.гггг'
    },
    {
        id: 4,
        name: 'Время',
        text: '--:--'
    },
    {
        id: 5,
        name: 'Заметки',
        text: 'Заметки'
    }
];


function Form() {
    return (
        <form>
            {formField.map(field => {
                return (
                    <div className='form-group row'>
                        <Item key={field.id} name={field.name} text={field.text}/>
                    </div>
                )
            })}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <input type="submit" className="btn btn-primary" value="Добавить"></input>
                </div>
            </div>
        </form>
    );
}

export default Form;