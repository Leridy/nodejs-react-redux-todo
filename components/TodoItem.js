/**
 * Created by Leridy on 2016/11/19.
 */
import React from 'react';

export default class TodoItem extends React.Component{
    constructor(props){
        super(props);
        
    };
    
    
    /*
    * 处理已完成事件
    * */
    handleCompleted() {
        this.props.completeTodo(this.props.todo.id);
    };
    
    /*
    * 处理删除事件
    * */
    handleDelete() {
        this.props.deleteTodo(this.props.todo.id);
    };
    
    /*
    * 渲染单个TODO item
    * */
    render() {
        return(
            <li className="todo-item">
                <input
                    type="checkbox"
                    className="todo-checkbox"
                    onClick={this.handleCompleted.bind(this)}
                />
                {this.props.todo.text}
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
