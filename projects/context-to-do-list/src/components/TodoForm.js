import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleInputChange = e => {

    }

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='Add a to-do'
                    value={}
                    onChange={this.handleInputChange}
                />
            </form>
        );
    }
}

const TodoFormWithContext = () => {
    return (

    );
}

export default TodoFormWithContext;