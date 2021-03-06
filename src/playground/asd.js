import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) =>{
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1 
      return {
        count: state.count + incrementBy
      };
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
    case 'DECREMENT':
      return {
        count: state.count - decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      }
  }
  return state;
});

console.log(store.getState());

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'SET',
  count: 101
})

// store.subscribe watches for changes to the redux store state.
// it is a function and gets called with a function and this 
// function runs everytime store changes.
