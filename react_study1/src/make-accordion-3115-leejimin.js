import React, { Component, useState } from "react"
import ReactDOM from "react-dom"
/* 내 정답
class Accordion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            focus : null
        }
    }
    render() {
        return(
            this.props.items.map((item, idx) => {
                return (
                    <div>
                        {  this.state.focus === idx?
                            <div onClick={() =>
                                this.setState({focus: null})}>{item.title}</div>
                            :
                            <div onClick={() =>
                            this.setState({focus: idx})}
                            >{item.title}</div>
                        }
                        {this.state.focus === idx? <div>{item.content}</div>: null}
                    </div>
                )
            })
        )
    }
}
const items = [
    { title: '제목 1', content: '내용 1' },
    { title: '제목 2', content: '내용 2' },
    { title: '제목 3', content: '내용 3' },
]
ReactDOM.render(<Accordion items={items} />, document.getElementById("root"))*/

class Accordion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            idx : null
        }
    }

    handleIdxChange = (idx) => {
        this.setState({idx:idx})
    }

    render() {
        return(
            this.props.items.map((item, idx) => {
                return (
                    <div>
                        <div onClick={() => {
                            if(this.state.idx == idx){
                                this.setState({idx: null})
                            }else {
                                this.handleIdxChange(idx)
                            }
                        }}>{item.title}</div>
                        {
                            (this.state.idx === idx) ?
                                <div>{item.content}</div> : null
                        }
                    </div>
                )
            })
        )
    }
}
const items = [
    { title: '제목 1', content: '내용 1' },
    { title: '제목 2', content: '내용 2' },
    { title: '제목 3', content: '내용 3' },
]
ReactDOM.render(<Accordion items={items} />, document.getElementById("root"))
