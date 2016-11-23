/**
 * Created by Leridy on 2016/11/19.
 */
import React from 'react';

export default class TodoInput extends React.Component {
    constructor(props) {
        super(props);
    };
    
    /*
     * 用于处理提交的Todo
     * */
    handleSubmit(e) {
        e.preventDefault();
        let inputValue = this._inputBox.value;
        let id = Date.now();
        fetch(`/todo/add/?time=${id}&todo=${inputValue}`)
            .then(function (data) {
                
            });
        this.props.addTodo(inputValue,id);
        this._inputBox.value = "";
    };
    
    
    /*
     * 渲染输入框
     * */
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input
                    type="text"
                    maxLength="15"
                    className="todo-input"
                    placeholder="TO DO 输入并回车 :-)"
                    ref={(a) => this._inputBox = a}
                />
            </form>
        );
    }
    
}
