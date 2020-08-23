import React from 'react';
import TodoContext from '../contexts/TodoContext';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        }
    }

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.createTask(this.state.inputValue);
        e.target.value = e.target.placeholder;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='Add a to-do'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
            </form>
        );
    }
}

const TodoFormWithContext = () => {
    return (
        <TodoContext.Consumer>
            {value => <TodoForm createTask={value.createTask} />}
        </TodoContext.Consumer>
    );
}

export default TodoFormWithContext;