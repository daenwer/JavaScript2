import React from 'react';


class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.props.liftData(name, value);
    }

    render() {
        return (
            <div>
                <input name='search' placeholder='Поиск по имени' onChange={this.handleChange} />
                <select name='sort' onChange={this.handleChange}>
                    <option value='no'>Без</option>
                    <option value='az'>А-я</option>
                    <option value='za'>Я-а</option>
                </select>
            </div>
        );
    }
}

export default Settings