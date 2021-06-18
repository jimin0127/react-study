// const { 남은시간, 재개함수, 멈춤함수 } = useTimer(타이머시간)
// =>
// 1초마다 남은 시간이 time으로 전달되며,
// pause 함수를 호출하여 타이머를 멈추고,
// resume을 이용해서 타이머를 재개 가능
// useTimer의 인자값으로 초기 타이머 시간(ex: 5초)를 전달
// 정해진 시간(ex: 5초)이 다 지나면, 이후에는 time이 더 이상 새로 갱신되지 않고 그대로 0으로 남아있으면 됨
import React, { useState, useRef, useEffect } from "react"
import ReactDOM from "react-dom";


const useTimer = (start_time) => {
    const [time, setTime] = useState(start_time)
    const timer = useRef()

    let resume = () => {
        timer.current = setInterval(function() {
            setTime((time) => time - 1)
        }, 1000)
    }

    let pause = () => {
        clearInterval(timer.current)
    }

        // 타이머 시작 (클래스 컴포넌트의 componentDidMount 메소드에서 수행하던 종류의 작업)
    if(time === 0) {
        pause()
        resume = () => {}
        pause = () => {}

    }

    useEffect(() => {
        resume();

        return pause
    }, [])

    // return {time, resume, pause}
    return {time, resume, pause}

}


function AppUsingTimer1() {
    const { time, resume, pause } = useTimer(5)
    return (
        <div>
            <p>time : {time}</p>
            {time === 0 ? null :
                <>
                    <button onClick={resume}>resume</button><br />
                    <button onClick={pause}>pause</button>
                </>
            }
        </div>
    )
}
function AppUsingTimer2() {
    const initTime = 5
    const { time } = useTimer(initTime)
    const style = { background: 'red', height: '50px', width: `${(time/initTime) * 100}%`}
    return <div style={style}></div>
}

ReactDOM.render(<div><AppUsingTimer1 /><AppUsingTimer2/></div>, document.getElementById("root"));
