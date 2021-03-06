import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// npm install uuid
import { v4 } from 'uuid' //랜덤한 id를 중복되지 않게 가져옴

class ListItem extends Component {
    render() {
        // 부모 컴포넌트로부터 전달받은 상태 변화 메소드 저장
        const { onRemove, onUpdate } = this.props
        const { id, value } = this.props.item

        return (
            <div style={{ border: '1px solid black', margin: '20px', padding: '20px' }}>
                <span>id : {id}</span><br />
                <span>value : {value}</span><br />
                {/* 화살표 함수를 전달하여, 부모로 부터 전달받은 상태 변화 메소드(onRemove) 호출 */}
                <button onClick={
                    () => {
                        // 필요한 인자값(삭제할 id) 전달
                        onRemove(id)
                    }
                }>remove</button>&nbsp;
                <button onClick={
                    () => {
                        // 필요한 인자값(추가할 객체) 전달
                        onUpdate(id, { id: id, value: value + 1 })
                    }
                }>update</button>
            </div>
        );
    }
}

class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { lst: [] }
    }

    handleCreateItem = () => {
        // create (concat)
        this.setState((state) => ({
            // 새 항목을 추가한 "새로운 참조를 가진" 리스트로 교체
            lst: state.lst.concat({ id: v4(), value: 0 })
        }))

    }

    handleRemoveItem = (uuid) => {
        // remove (filter)
        this.setState((state) => ({
            lst: state.lst.filter((item) => {
                // id가 일치할 경우 false 리턴하여 리스트에서 제외
                return item.id !== uuid
            })
        }))
    }

    handleUpdateItem = (uuid, updated) => {
        // update (map)
        this.setState((state) => ({
            lst: state.lst.map((item) => {
                // id가 일치할 경우
                if(item.id === uuid) {
                    // 수정된 객체를 반환
                    return updated
                } else {
                    return item
                }
            })
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleCreateItem}>add</button>
                <ul>
                    {
                        this.state.lst.map(item => {
                            // uuid => 데이터베이스에서 참조할 pk라고 가정
                            return <li key={item.id}> {/* key는 변하면 안된다. == primary key*/}
                                <ListItem
                                    item={item}
                                    onRemove={this.handleRemoveItem}
                                    onUpdate={this.handleUpdateItem}/>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<ListComponent />, document.getElementById("root"))