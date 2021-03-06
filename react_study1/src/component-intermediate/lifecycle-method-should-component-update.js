import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class Container extends Component {
    constructor(props) {
        super(props)

        this.state = { count: 1 }
    }

    render() {
        return (<div>
            <button onClick={ () => this.setState(s => ({ count: s.count + 1 })) }>update count</button>
            <ShouldComponentUpdateDemo count={this.state.count} /> {/*count가 바뀌면 */}
        </div>)
    }
}

class ShouldComponentUpdateDemo extends Component {
    constructor(props) {
        super(props)

        this.state = { text: "a" }
    }

    // props로 전달된 count 값이 짝수이거나 내부 상태값 중 text의 길이가 3의 배수가 될 경우 렌더링할 필요가 없다고 가정
    // props가 바뀌면 호출됨
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps, nextState, nextContext)

        if((nextProps.count % 2) === 0) {
            console.log("count 값이 짝수이므로 렌더링하지 않음")
            return false //render를 호출하지 않는다.
        } else if((nextState.text.length % 3) === 0) {
            console.log("text 길이가 3의 배수이므로 렌더링하지 않음")
            return false
        }

        return true //render()를 호출
    }

    render() {
        console.log("render")

        return (<div>
            <p>count : {this.props.count}</p>
            <p>text : {this.state.text}</p>
            <button onClick={ () => this.setState(s => ({ text : s.text + "a" })) }>update text</button>
        </div>)
    }
}

ReactDOM.render(<Container />, document.getElementById("root"))