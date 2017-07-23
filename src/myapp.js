import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { todos } from './containers/TodoApp/reducers';
import TodoApp from './containers/TodoApp';
/*const todos = (state = [], action) => {
    switch(action.type){
        case 'SHOW_ALL': return state;
        case 'ADD_TODO':
            return [
                ...state,
                action.text
            ];
        default: return state;
    }
}
const store = createStore(todos);

class TodoApp extends React.Component {
    constructor (props) {
        super(props);
    }
    handleClick = (value) => {
        const t = todos(this.state.todos,{
            type: 'ADD_TODO',
            text: value
        });
        this.setState({todos: t});
    }
    render(){
        return(
            <div>
                <Todos todos={this.state.todos} />
                <Button onClick={this.handleClick}/>
            </div>
        )
    }
}

class Todos extends React.Component {
    render() {
        const {todos} = this.props;
        return (
            <ul>
                {todos.map((todo) => <TodoList todo={todo}/>)}
            </ul>
        )
    }
}

const TodoList = (props) => {
    return (<li>{props.todo}</li>)
}
class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
        }
    }
    handleInput = (e) => {
        e.preventDefault();
        this.setState({
            text: e.target.value
        });
    } 
    submit = () => {
        this.props.onClick(this.state.text);
    }
    render(){
        return (
        <div>
            <input type="text" onChange={this.handleInput}/>
            <button onClick={this.submit}>Add</button>
        </div>       
        )
    }
}*/
const store = createStore(todos,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
<Provider store={store}>
    <TodoApp/>
</Provider>,
document.getElementById('root'));