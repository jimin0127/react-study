import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class StateDemoComponent extends Component {
    constructor(props) {
        super(props)
        // 반드시 "생성자 함수 내부"에서 상태 초기화 진행
        // props와는 다르게 state는 변경 가능함을 유의 (단, setState 메소드를 이용하여 변경)
        this.state = { // 부모한테 받은 props가 아니다. 
            value1: "hello",
            value2: 1000,
            inner: {
                value3: null
            }
        }
    }

    //setState를 호출하면 상태가 변하고 render()함수를 호출한다.
    handleValue2 = () => {
        // 이전 상태를 참조하여 상태값을 변경해야 하므로, setState 메소드에 함수 전달하여 상태 변경
        this.setState(state => { //콜백함수 전달 / 이전 함수 전달
            return { value2: state.value2 - 1 } // 비동기적 실행
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState((state) => { //콜백함수를 쓰지 않으면 비동기이기 때문에 값이 큐에 쌓여서 반영이 안될 수 있다.
                        return { value1: state.value1 === "hello" ? "bye" : "hello" }
                    })
                }}>{this.state.value1}</button>
                <br />
                <button onClick={this.handleValue2}>{this.state.value2}</button>
            </div>
        )
    }
}

ReactDOM.render(<StateDemoComponent />, document.getElementById("root"))
