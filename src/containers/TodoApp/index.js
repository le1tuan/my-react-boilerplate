import React from 'react';
import ReactDOM from 'react-dom';
import { addTodo, showAll } from './actions';
import { todos } from './reducers';
import { connect } from 'react-redux';

class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: '',
        }
    }
    handleClick = () => {
        this.props.addTodo(this.state.text);
        this.setState({text: ''});
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            text: e.target.value
        })
    }
    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map(x => {
                        return <li>{x}</li>
                    })}
                </ul>
   
                <input type="text" onChange={this.handleChange} value={this.state.text}/>
                <button onClick={this.handleClick}>ADD</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       addTodo: (text) => dispatch(addTodo(text)),
       show: () => dispatch(showAll()),
    }
}

TodoApp = connect(mapStateToProps,mapDispatchToProps)(TodoApp);
export default TodoApp;