import React, {Component,Fragment} from 'react'
import ReactDOM from 'react-dom'

class Child extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}


class Parent extends Component {
    render() {
        return (
            <React.Fragment>
                <Child>Hello</Child> {/* chlidren은 Hello*/}
                <hr />
                <Child>
                    <h1>Title</h1>
                    <div>React</div>
                    <ol>
                        <li>item 1</li>
                        <li>item 2</li>
                    </ol>
                    <Child>Inner Child</Child>
                </Child>
            </React.Fragment>
        )
    }
}

class ChildWithFunciton extends Component{
    render() {
        return(
            <div>
                {this.props.children()}
            </div>
        )
    }
}



{/* render Props */}
ReactDOM.render(<ChildWithFunciton>
    {()=> {
        return (
            <div>FunctionProp</div>
        )
    }}
</ChildWithFunciton>, document.getElementById("root"))