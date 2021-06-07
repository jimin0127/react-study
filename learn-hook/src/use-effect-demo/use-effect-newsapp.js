import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const NewsItem = (props) => {
    const {title, description, url, urlToImage} = props.article

    return (
        <div>
            <h1><a href={url} target='_blank'>{title}</a></h1>
            <img style={{height: '100px'}} src={urlToImage}/>
            <p>{description}</p>
        </div>
    )
}

const Search = (props) => {
    const [text, setText] = useState('')

    return(
        <div>
            <input type='text' value={text} placeholder='검색어 입력'
                   onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() =>props.click(text)}>검색</button>
        </div>
    )
}

const NewsApp = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('비트코인')

    const apiKey = '630bb3bf74c842db83b3e8e4d111ef07'

    useEffect(() => {
        // 초기에 한 번만 API를 통해서 뉴스 데이터 읽어오기
        fetch(`http://newsapi.org/v2/everything?apiKey=${apiKey}&q=${search}`)
            .then(res => res.json())
            .then(data => {
                // 데이터 설정 및 로딩 상태 갱신
                setArticles(data.articles)
                setLoading(false)
            })
    }, [search])

    return (
        <div>
            {/*<div>
                <input type='text' value={text} placeholder='검색어 입력'
                       onChange={(e) => setText(e.target.value)}
                />
                <button onClick={() => setSearch({text})}>검색</button>
            </div>*/}
            <Search click = {setSearch} />
            {
                articles.length === 0
                    ? loading ? <h1>뉴스를 불러오는 중입니다.</h1> : <h1>표시할 뉴스가 없습니다.</h1>
                    :
                    <ul>
                        {
                            articles.map((article, idx) => {
                                return (<li key={idx}>
                                    <NewsItem article={article} />
                                </li>)
                            })
                        }
                    </ul>
            }
        </div>
    )
}

ReactDOM.render(<NewsApp />, document.getElementById("root"))