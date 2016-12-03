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
        let inputValue = this._inputBox.value.trim();
        let id = Date.now();
        if (inputValue === ""){
            console.log("你没有输入任何信息");
            alert("多少输入一点什么吧");
            return 0;
        }
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
                    maxLength="40"
                    className="todo-input"
                    placeholder="TO DO 输入并回车 :-)"
                    ref={(a) => this._inputBox = a}
                />
            </form>
        );
    }
    
}
