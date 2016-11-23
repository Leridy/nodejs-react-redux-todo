/**
 * Created by Leridy on 2016/11/19.
 */
import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        
    };
    
    /*
     * 处理已完成事件
     * */
    handleCompleted() {
        let self = this;
        fetch(`/todo/complete/?time=${self.props.todo.time}`)
            .then(function (data) {
                self.props.completeTodo(self.props.todo.time);
            }).catch(
            function (data) {
                alert(`修改失败错误代码${data}`);
            }
        );
        
    };
    
    /*
     * 处理删除事件
     * */
    handleDelete() {
        let self = this;
        fetch(`/todo/delete/?time=${self.props.todo.time}`)
            .then(function (data) {
                self.props.deleteTodo(self.props.todo.time);
            }).catch(
            function (data) {
                alert(`修改失败错误代码${data}`);
            }
        );
        
    };
    
    /*
     * 渲染单个TODO item
     * */
    render() {
        return (
            <li className="todo-item">
                <input
                    type="checkbox"
                    className="todo-checkbox"
                    defaultChecked={this.props.todo.completed}
                    onClick={this.handleCompleted.bind(this)}
                />
                {this.props.todo.todo}
                <span
                    className="todo-cancel"
                    title="取消Todo"
                    onClick={this.handleDelete.bind(this)}
                >
                    x
                </span>
            </li>
        );
    }
}
