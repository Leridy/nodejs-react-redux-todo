/**
 * Created by Leridy on 2016/11/19.
 */

import React from 'react';
import TodoItem from './TodoItem';
import $ from 'jquery'
/*
 * 将获取的Todo信息传入子Component
 * */
export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        console.log("执行DidMount");
        this.getData();
    }
    
    getData() {
        let ctx = this;
        let initialState = [];
        $.get('/todo/getAll', function (data) {
            data.todos.reverse().forEach(function (ele) {
                let copy = {done: ele.done, time: ele.time, todo: ele.todo};
                initialState.push(copy);
            });
            ctx.props.actions.initState(initialState);
        });
    }
    
    render() {
        return (
            <ul className="todo-list">
                {
                    this.props.todos.map(function (todo) {
                            return (
                                <TodoItem
                                    key={todo.time}
                                    todo={todo}
                                    deleteTodo={this.props.actions.deleteTodo}
                                    completeTodo={this.props.actions.completeTodo}
                                />
                            );
                        }.bind(this)
                    )
                }
            </ul>
        );
    }
}
