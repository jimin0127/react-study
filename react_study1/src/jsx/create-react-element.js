import React from 'react'
import ReactDOM from 'react-dom'

const img = React.createElement('img', { src: 'https://picsum.photos/id/237/200/300', title: 'img title' })

//jsx 문법 : js가 아니라 javascript XML : html과 js를 함께 기술할 수 있도록 JS 확장
const element = <h1>Hello, world!</h1>
// = const element = React.createElement("h1", null, "Hello, World!");

// React.createElement(태그이름(문자열), 태그속성(객체), 컨텐츠(문자열이거나 다른 ReactElement))
// h1, p, img / hreaf, src / '문자열', uo)
// const img = React.createElement('img', { src: 'https://picsum.photos/id/237/200/300', title: 'img title' })

// root는 public.index에 <div id = "root"></div>
// root div에 부착하는 형태로
const rootElement = document.getElementById("root")


const paragraph = React.createElement(
    'p',
    null,
    'Hello, React'
)

const ul = ['banana', 'apple', 'peach'].map(flash =>{
    return React.createElement('li', null, flash)
})

const favorte = React.createElement('div', null,
    React.createElement('h1', null, '좋아'),
    React.createElement('ul', null, ul)
)

// 모두 jsx로 바꿀 수 있음

// React.render XXX
//ReactDOM.render(자식, 부모)
ReactDOM.render([img, paragraph, favorte], rootElement) //img를 rootElement에 부착
// ReactDom인 이유 : DOM에만 그려지지 않기 때문에 DOM에 바로 반영되지 않고 간접적으로 VDOM에 반영

