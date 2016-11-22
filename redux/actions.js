/**
 * Created by Leridy on 2016/11/19.
 */
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';

/*
* 定义Action Creator
* */
let actions = {
  addTodo: function (text) {
      return {
          type: ADD_TODO,
          text:text
      };
  },
  
  deleteTodo: function (id) {
      return{
          type: DELETE_TODO,
          id: id
      }
  },
  
  completeTodo: function (id) {
      return{
          type: COMPLETE_TODO,
          id: id
      }
  }
};

export default actions;
