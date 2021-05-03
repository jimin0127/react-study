import React, { Component } from 'react'
import ReactDOM from 'react-dom'



class ImageSlider extends Component {
    constructor(props) {
        super(props)

        // 기능 구현에 필요한 값을 state에 추가 가능
        this.state = {
            idx : 0,
            images : [
                'https://via.placeholder.com/100x100?text=Image+1',
                'https://via.placeholder.com/100x100?text=Image+2',
                'https://via.placeholder.com/100x100?text=Image+3',
                'https://via.placeholder.com/100x100?text=Image+4'
            ]
        }
    }
    handlePrev = () => {
        this.setState((state) => ({
            idx: state.idx -1
        }))
    }

    handleNext = () => {
        this.setState((state) => ({
            idx: state.idx +1   
        }))
    }

    render() {
        return (
            <div>
                <img src={this.state.images[this.state.idx]}/>
                {this.state.idx > 0 && <button onClick={() => {this.handlePrev()}}>prev</button>}
                {this.state.idx < this.state.images.length-1 && <button onClick={() => {this.handleNext()}}>next</button>}
            </div>
        )
    }
}

ReactDOM.render(<ImageSlider />, document.getElementById("root"))