import React from 'react'
import ReactDOM from 'react-dom'


class FormControlloedComponent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            text:'',
            textareaText:'',
            checked:false,
            selected : 'default'
        }
    }

    handleTextChange = e =>{
        this.setState({
            text: e.target.value
        })
    }

    handleTextareaTextChange = e => {
        this.setState({

        })
    }
}