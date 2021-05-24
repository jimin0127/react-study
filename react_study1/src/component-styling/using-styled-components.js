import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// styled-components 모듈 불러오기
import styled from 'styled-components'

// styled.태그이름` ... 스타일내용 ... `
const ButtonWithoutStyle = styled.button`` // 그냥 버튼 태그랑 같다.
const ButtonWithStyle = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 1px solid black;
    color: red;
    font-size: 24px;
`
const Anchor = styled.a`
    text-decoration: none;
    &:hover {
        background: yellow;
    }
`
const MyDiv = styled.div`
    width: 500px;
    height: 100%;
    margin: 0 auto;
    border: 1px solid red;
`

class App extends Component {
    render() {
        return (
        <MyDiv>
            {/* 스타일이 적용된 컴포넌트 사용 */}
            <ButtonWithoutStyle>without style</ButtonWithoutStyle><br />
            <ButtonWithStyle>with style</ButtonWithStyle><br />
            <Anchor href="https://www.google.com">styled anchor</Anchor>
        </MyDiv>
    )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))