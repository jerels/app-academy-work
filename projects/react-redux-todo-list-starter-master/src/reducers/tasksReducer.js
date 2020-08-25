import { CREATE_TASK, DELETE_TASK, RESET_TASK_LIST } from '../actions/taskActions';


const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };
  switch (action.type) {
    case CREATE_TASK:
      const newTask = {
        message: action.taskMessage,
        id: action.taskId,
      };
      nextState[newTask.id] = newTask;
      return nextState;
    case DELETE_TASK:
      delete nextState[action.taskId];
      return nextState;
    case RESET_TASK_LIST:
      return {};
    default:
      return state;
  }
};

export default tasksReducer;
