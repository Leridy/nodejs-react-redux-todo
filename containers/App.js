/**
 * Created by Leridy on 2016/11/19.
 */

import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import actions  from '../redux/actions';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

class App extends React.Component{
    constructor(props){
        super(props)
    }
    
    CompomentDidAmount(){
        this.props.getData();
    }
    
    render() {
        return (
            <div>
                <TodoInput addTodo={this.props.actions.addTodo} />
                <TodoList todos={this.props.todos} actions={this.props.actions}/>
            </div>
        )
    }
}

let mapStateToProps = function (state) {
    return state;
};

let mapDispatchToProps = function (dispatch) {
    return {
        actions : bindActionCreators(actions,dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



