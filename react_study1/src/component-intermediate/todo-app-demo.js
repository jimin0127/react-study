import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class TodoItem extends Component {
    render() {
        const { completed, text } = this.props.todo

        return (
            <div>
                <div>
                    <span
                        style={completed ? { textDecoration: 'line-through' } : null}
                        onClick={() => this.props.handleTodoStatusToggle(this.props.idx)}>
                        {text}
                    </span>&nbsp;
                    <button onClick={() => this.props.handleTodoRemove(this.props.idx)}>X</button>
                </div>
            </div>
        )
    }
}

class TodoList extends Component {
    render() {
        return (
            <ol>
                {
                    this.props.todos.map((todo, idx) => {
                        return (
                            <li key={idx}>
                                <TodoItem
                                    idx={idx}
                                    todo={todo}
                                    handleTodoStatusToggle={this.props.handleTodoStatusToggle}
                                    handleTodoRemove={this.props.handleTodoRemove}/>
                            </li>
                        )
                    })
                }
            </ol>
        )
    }
}

class TodoAdder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value }) // target은 input 태그
    }


    render() {
        return (
            <div>
                <input type='text' onChange={this.handleChange} value={this.state.input} />
                {/* 우리가 만든 함수는 bind를 해주어야하는데 화살표 함수를 사용하면 bind를 할 필요없이 this가 함께 전달된다. */}
                <button onClick={() => {
                    this.props.handleTodoAdd({ completed: false, text: this.state.input })
                    this.setState({ input: '' })
                }}>Add</button>
            </div>
        )
    }       
}

// 최상위 앱 ~앱 어플리케이션
class TodoApp extends Component {
    constructor(props) {
        super(props)

        // 상태는 최상위 컴포넌트가 가지고 있음
        this.state = {
            todos: [
                { completed: false, text: '리액트 공부하기' },
                { completed: true, text: 'ES6 문법 공부하기' },
            ]
        }
    }

    handleTodoAdd = (newTodo) => {
        this.setState((state) => ({
            todos: state.todos.concat(newTodo)
        }))
    }

    handleTodoStatusToggle = (todoIndex) => {
        this.setState((state) => ({
            todos: state.todos.map((todo, idx) => {
                if(idx === todoIndex) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        }))
    }

    handleTodoRemove = (todoIndex) => {
        this.setState((state) => ({
            todos: state.todos.filter((_, idx) => {
                return idx !== todoIndex
            })
        }))
    }

    render() {
        return (
            <div>
                <TodoList
                    todos={this.state.todos}
                    handleTodoStatusToggle={this.handleTodoStatusToggle}
                    handleTodoRemove={this.handleTodoRemove}/>
                <TodoAdder handleTodoAdd={this.handleTodoAdd} />
            </div>
        );
    }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<TodoApp />, rootElement)