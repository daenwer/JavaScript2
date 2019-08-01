import React from 'react';


function Form() {
    return (
        <form>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Имя животного</label>
                <div className="col-sm-10">
                    <input type="text" placeholder="Имя" className="form-control" name="name"></input>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Владелец</label>
                <div className="col-sm-10">
                    <input type="text" placeholder="Владелец" className="form-control" name="owner"></input>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Дата</label>
                <div className="col-sm-10">
                    <input type="date" className="form-control" name="date"></input>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Время</label>
                <div className="col-sm-10">
                    <input type="time" className="form-control" name="time"></input>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Заметки</label>
                <div className="col-sm-10">
                    <textarea placeholder="Заметки" name="content" className="form-control"></textarea>
                </div>
            </div>
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