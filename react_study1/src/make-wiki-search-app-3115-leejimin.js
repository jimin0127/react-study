import React, { useState, useEffect, useCallback } from "react"
import ReactDOM from "react-dom"
const Search = ({handleSubmit, label}) => {
    const [keyword, setKeyword] = useState('')
    return (
        <div>
            <input type="text" onChange={e => setKeyword(e.target.value)}/>
            <button onClick={() => {
                handleSubmit(keyword)
            }}>{label ?? "검색"}</button>
        </div>
    )
}

const WikiSearchApp = (props) => {
    const [searchData, setSearchData] = useState(null)
    const [keyword, setKeyword] = useState(null)
    useEffect(() => {
        if(keyword) {
            fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${keyword}`)
                .then(res => res.json())
                .then(data => {
                    {console.log(data)}
                    setSearchData(data)
                })
        }

    }, [keyword])


    let content = null
    if(searchData !== null) {
        content = (
            <div>
                <ul>
                {searchData[1].map((value, idx) => {
                    return(<li key={idx}>
                        <a href={searchData[3][idx]}>{value}</a></li>
                    )
                })}
                </ul>
            </div>
        )
    }
    return (
        <div>
            <Search handleSubmit={setKeyword} label="찾기" />
            {keyword ?
                <div>
                    <h1>{keyword} 검색결과</h1>
                    {content}
                </div>

                : <h1>no search result</h1>}

        </div>
    )
}
ReactDOM.render(<WikiSearchApp />, document.getElementById("root"))