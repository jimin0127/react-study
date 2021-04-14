import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ForceUpdateDemo extends Component {

    //setState가 없으므로 render가 호출될 일이 없으나 forceUpdate로 render를 강제 호출
    constructor(props) {
        super(props)
        this.state = { intervalId: null }
    }

    componentDidMount() {
        this.state.intervalId = setInterval(() => {
            // forceUpdate 메소드 호출하여 강제로 render 호출
            console.log("forceUpdate")
            this.forceUpdate();
        }, 1000)
    }

    componentWillUnmount() {
        clearTimeout(this.state.intervalId)
    }

    render() {
        //내부에 state나 props를 변경하는 코드는 없다.
        console.log("render")
        return <div>{ (new Date()).toISOString() }</div>
    }
}

ReactDOM.render(<ForceUpdateDemo />, document.getElementById('root'))