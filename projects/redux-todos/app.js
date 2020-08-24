const { store, createTask, deleteTask, resetTaskList } = require('./reduxStoreActionReducer');


console.log('Default Redux Store: ', store.getState());

store.dispatch(createTask('walk dog'));
store.dispatch(createTask('feed cat'));
store.dispatch(createTask('talk to bird'));

console.log('Redux Store:');
console.log(store.getState());

store.dispatch(deleteTask(0));
store.dispatch(deleteTask(1));

console.log('Updated Redux Store:');
console.log(store.getState());

store.dispatch(resetTaskList());

console.log('Reset Redux Store: ', store.getState());