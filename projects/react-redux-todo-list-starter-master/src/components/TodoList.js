import React from 'react';
import Task from './Task';
import store from '../store';
import { deleteTask, resetTaskList } from '../actions/taskActions.js';

class TodoList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  deleteTask = (id) => {
    store.dispatch(deleteTask(id));
  }

  resetTaskList = () => {
    store.dispatch(resetTaskList());
  }

  render() {
    const currentState = store.getState();
    if (!currentState) {
      return null;
    }
    const tasks = Object.values(currentState);
    // TODO: Use debugger to view state
    // TODO: If there are no tasks stored in state, return `null`.

    return (
      <>
        <ul>
          {tasks.map(task => <Task key={task.id} deleteTask={this.deleteTask} task={task} />)}
        </ul>
        <button onClick={this.resetTaskList}>Clear Task List</button>
      </>
    );
  }
}

export default TodoList;
