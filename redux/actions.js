/**
 * Created by Leridy on 2016/11/19.
 */
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const INIT_TODO = 'INIT_TODO';

/*
 * 定义Action Creator
 * */
let actions = {
    addTodo: function (text, time) {
        return {
            type: ADD_TODO,
            text: text,
            time: time
        };
    },
    
    deleteTodo: function (time) {
        return {
            type: DELETE_TODO,
            time: time
        }
    },
    
    completeTodo: function (time) {
        return {
            type: COMPLETE_TODO,
            time: time
        }
    },
    
    initState: function (state) {
        return{
            type: INIT_TODO,
            todos:state,
        }
    }
};

export default actions;
