import React from 'react'
import ReactDOM from 'react-dom'

const name = 'Josh Perez'
// 변수 내용 삽입 가능 jsx표현식 지원
const element = <h1>Hello, {name}</h1>

const lst = [100, 200, 300]
const person = {
    name: 'John',
    age: 20
}
function double(value) {
    return value * 2
}

//jsx
const JSXwithExpressions = (
    <h1>
        {
            //주석 jsx 내부에서는 {}안에 주석을 넣는다.
        }
        {lst[0]}
        &nbsp;{person.name}
        &nbsp;{person.age}
        &nbsp;{2 + 2}
        &nbsp;{person.name.toUpperCase()}
        &nbsp;{person.name.length}
        &nbsp;{double(person.age)}
    </h1>)

//bool과 undefined, null은 출력 되지 않는다.
const div = <div>
    {true}
    {false}
    {undefined}
    {null}
</div>

//조건부 렌더링
// {조건 && 조건맞으면 그릴거}
// &&은 false인 것을 찾아서 그것을 반환, 모두 true 이면 뒤에 조건 반환
// login && <h1>환영합니다</h1> -> login이 true이면 환영합니다를 그림
// js에서는 if else 쓸 수 있지만 jsx에서는 ifelse를 쓰지 못함 -> 삼항 연산자 사용

ReactDOM.render(div, document.getElementById("root"))
