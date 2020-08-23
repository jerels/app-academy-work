import React from 'react';
import Task from './Task';
import TodoContext from '../contexts/TodoContext';

class TodoList extends React.Component {
    static contextType = TodoContext;

    render() {
        const { tasks, deleteTask } = this.context;
        return (
            <ul>
                {Object.values(tasks).map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                    />
                ))}
            </ul>
        );
    }
}

export default TodoList;