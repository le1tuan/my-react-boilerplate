import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { createStore } from 'redux';
import  expect from 'expect';
import deeFreeze from 'deep-freeze';

// how state update when dispatch action
const counter = (state = 0 ,action) => {
    switch (action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}

// const createStore = (reducer) => {
//     let state;
//     let listeners = [];
//     const getState = () => {
//         return state;
//     }
//     const dispatch = (action) => {
//         state = reducer(state, action);
//         listeners.forEach(listener => listener());
//     };
//     const subscribe = (listener) => {
//          listeners.push(listener);
//          return () => {
//              listeners = listeners.filter(l => l !== listener);
//          }
//     }
//     dispatch({});
//     return {getState, dispatch,subscribe};
// }
// const store = createStore(todoApp);
// store.subscribe(() => {
//     document.body.innerText = store.getState();
// })
// document.addEventListener('click', () => {
//     store.dispatch({ type: 'INCREMENT' });
// })
const increment = () => {
    store.dispatch({type: 'INCREMENT'});
}
const decrement = () => {
    store.dispatch({ type: 'INCREMENT' });
}

const Counter = ({value, onIncrement, onDecrement}) =>(
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

// const removeCounter = (list, index) => {
//     return [
//         ...list.slice(0, index),
//         ...list.slice(index+1)
//     ];
// }
// const  addCounter = (list) => {
//     return [...list, 0];
// }
// const incrementCounter = (list, index) => {

// }

// const testAddCounter = () => {
//     const listBefore = [];
//     const listAfter = [0];
//     deeFreeze(listBefore);
//     expect(addCounter(listBefore)).toEqual(listAfter);
// }
// const testRemoveCounter = () => {
//     const listBefore = [0, 10, 20];
//     const listAfter = [0, 20];
//     deeFreeze(listBefore);
//     expect(
//         removeCounter(listBefore, 1)
//     ).toEqual(listAfter); 
// }

// testAddCounter();
// testRemoveCounter();
// console.log('All tests passed')

/*const render = () => {
    const value = store.getState();
    console.log(value);
    ReactDOM.render(<Counter 
    value={store.getState()} 
    onIncrement={increment} 
    onDecrement={decrement}
    />, document.getElementById('root'));
}
store.subscribe(render);
render();*/
// const toggleTodo = (todo) => {
//     return {
//         id: todo.id,
//         text: todo.text,
//         completed: true
//     };
// }

// const testToggleTodo = () => {
//     const todoBefore = {
//         id: 0,
//         text: 'Learn Redux',
//         completed: false
//     }
//     const todoAfter = {
//         id: 0,
//         text: 'Learn Redux',
//         completed: true
//     }
//     deeFreeze(todoBefore);
//     expect(toggleTodo(todoBefore)).toEqual(todoAfter);
// }
// testToggleTodo();
// console.log('All tests passed');
const todo = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if(state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            }
        default: 
            return state;
    }
}
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(state,action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => {
                return todo(t,action)
            })
        default:
            return state;
    }
}
const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    }
    const stateAfter = [
        {
            text: 'Learn Redux',
            id: 0,
            completed: false
        }
    ]; 
    deeFreeze(stateBefore);
    deeFreeze(action);
    expect(todos(stateBefore,action)).toEqual(stateAfter);
}
const visibilityFilter = (state = 'SHOW_ALL',action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER': 
            return action.filter;
        default:
            return state;
    }

}
const todoApp = (state = {}, action) => {
    console.log(action);
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    }
}

const store = createStore(todoApp);
console.log(store.getState());



const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },{
            id: 1,
            text: 'Go shipping',
            completed: false
        }
    ]
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    }
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },{
            id: 1,
            text: 'Go shipping',
            completed: true
        }
    ]
    deeFreeze(stateBefore);
    deeFreeze(action);
    expect(todos(stateBefore, action)).toEqual(stateAfter);
}
 
testAddTodo();
testToggleTodo();
console.log('all tests passed');
