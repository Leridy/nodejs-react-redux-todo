/**
 * Created by Leridy on 2016/11/19.
 */

import React from 'react';
import TodoItem from './TodoItem';

/*
* 将获取的Todo信息传入子Component
* */
export default class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return(
            <ul className="todo-list">
                {
                    this.props.todos.map(function (todo) {
                        return (
                          <TodoItem
                              key = {todo.time}
                              todo = {todo}
                              deleteTodo = {this.props.actions.deleteTodo}
                              completeTodo = {this.props.actions.completeTodo}
                          />
                        );
                        }.bind(this)
                    )
                }
            </ul>
        );
    }
}
