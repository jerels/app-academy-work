const { store, createTask, deleteTask, resetTaskList } = require('./reduxStoreActionReducer');

console.log('Default Redux Store:', store.getState());

store.subscribe(() => console.log(store.getState()));

console.log('Task creation');
store.dispatch(createTask('walk dog'));
store.dispatch(createTask('feed cat'));
store.dispatch(createTask('talk to bird'));
store.dispatch(createTask('watch goldfish'));

console.log('Task deletion');
store.dispatch(deleteTask(0));
store.dispatch(deleteTask(1));

console.log('Task list rest');
store.dispatch(resetTaskList());