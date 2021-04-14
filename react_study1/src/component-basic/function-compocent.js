import React, {Component,Fragment} from 'react'
import ReactDOM from 'react-dom'

// 훅(Hook)
// 화살표 함수로 컴포넌트 정의 (props 값은 함수의 파라미터로 전달)

const Greeting = (props) => {
    return (<h1>Hello, {props.name}</h1>)
}

// 한줄로 표현하면 return 문 생략
const Smile = (props) => <span style={{fontSize: (props.size || 16) + 'px'}}>😃
</span>

function FuncComponent(props) {
    return (
        <div>
            {/* 일반적인 똑같이 사용*/}
            <Greeting name = "John"/>
            <Smile size = {100}/>
            <Smile/>
        </div>
    )
}
ReactDOM.render(<FuncComponent/>,document.getElementById("root"))
