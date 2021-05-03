import React, {Component} from 'react-dom'
import ReactDOM from 'react-dom'

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count:0
        }
    }

    increment = () => {
        this.setState((state) => {
            return {count: state.count + 1}
        })
    }
    decrement = () => {
        this.setState((state) => {
            return {count: state.count -1}
        })
    }
    


    render() {
        return (
            <div>
                <h2>{this.state.time}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={()=> {this.add(5)}}>+5</button>
                <button onClick={()=> {this.add(10)}}>+10</button>
            </div>
        )
    }
}