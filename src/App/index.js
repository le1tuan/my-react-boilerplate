import React from 'react';
import ReactDOM from 'react-dom';
import MenuExampleProps from '../Menu';
import Wrapper from '../containers/Wrapper';
class App extends React.Component {
    
    render(){
        console.log(this.props.value);
        return (
        <div>
            <h1>{this.props.value}</h1>
            <button onClick={this.props.onIncrement}>+</button>
            <button onClick={this.props.onDecrement}>-</button>
        </div>
        )
    }
}

export default App;