import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
const Search = ({label, handleSearch}) => {
    const [keyword, setKeyword] = useState('')

    return (
        <div>
            <input
                type = "text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}/>
            <button onClick={() => {
                const k = keyword.trim()
                if(k.length == 0) {
                    alert('검색어를 정확히 입력해주세요')
                }else {
                    handleSearch(k)
                }
            }}>{label ?? "검색"}</button>
        </div>
    )
}
const NewsItem = ({article}) => {
    const {title, description, urlToImage} = article
    return(
        <div>
            <h3>{title}</h3>
            <h3>{description}</h3>
            <img src={urlToImage}/>
        </div>
    )
}

const NewsList = ({articles}) => {
    return(
    <ul>
        {
            articles.map((value, idx) => {
                return (<li key={idx}>
                    <NewsItem article={value} />
                </li>
            })
        }
    </ul>
    )
}

const NewsApp = () => {
    const [query, setQuery] = useState(null)
    const [articles, setArticles] = useState([])

    const apiKey = '630bb3bf74c842db83b3e8e4d111ef07'
    useEffect(() => {
        if(query) {
            fetch(`http://newsapi.org/v2/everything?apiKey=${apiKey}&q=${query}`)
                .then(res => res.json())
                .then(data => {
                    // 데이터 설정 및 로딩 상태 갱신
                    setArticles(data.articles)
                })
        }
    }, [query])


    return(
        <div>
            <Search lable="찾기" handleSearch={setQuery}/>
            <h1>{query}</h1>
            <NewsList articles={articles}/>

            <pre>
                {JSON.stringify(articles, null, 2)}
            </pre>
        </div>
    )
}


ReactDOM.render(<NewsApp />, document.getElementById("root"))