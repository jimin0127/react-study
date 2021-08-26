import React, {useState} from "react"
import ReactDOM from "react-dom"



function Accordion() {
    const [idx, setIdx] = useState(null)

    const items = [
        { title: '제목 1', content: '내용 1' },
        { title: '제목 2', content: '내용 2' },
        { title: '제목 3', content: '내용 3' },
    ]

    const handleIndex = idx => {
        setIdx(idx)
    }

    return (
        <div>
            {items.map((item, index) => (
                <div onClick={() => {
                    if(idx == index) {
                        setIdx(null)
                    } else {
                        handleIndex(index)
                    }
                }}>
                    <h2>{item.title}</h2>
                    {idx == index ? item.content : null}
                </div>

            ))}
        </div>
    )

}
ReactDOM.render(<Accordion />, document.getElementById("root"));