import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = { count: 0 }
    }

    increment = () => {
        this.setState((state) => {
            return { count: state.count + 1 }
        })
    }

    decrement = () => {
        this.setState((state) => {
            return { count: state.count - 1 }
        })
    }

    // Q1) 특정 숫자 값을 파라미터로 전달받아 count에 더해주는 add 메소드 추가
    add = (num) => {
        this.setState((state) => {
            return {count : state.count + num}
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                {/* Q2) 5, 10만큼 증가시키는 두 개의 버튼을 추가하여 Q1에서 정의한 add 메소드를 호출하도록 수정 */}
                <button onClick={()=> { this.add(5) }}>+5</button>
                <button onClick={() => { this.add(10)}}>+10</button>
            </div>
        );
    }
    //<button onClick={this.add(10)}>+10</button> -- onClick으로 this.add(5)를 호출한 결과값을 반환
    //<button onClick={() => { this.add(10)}}>+10</button> -- onClick으로 this.add(10)을 호출하는 역할을 하는 함수를 생성하여 전달
}

const rootElement = document.getElementById("root")
ReactDOM.render(<Counter />, rootElement)