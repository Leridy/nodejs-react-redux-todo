/**
 * Created by Leridy on 2016/11/19.
 */



let reducer = function (state, action) {
    
    switch (action.type) {
        case 'ADD_TODO':
            console.log(`你已经添加了一条内容是 ' ${action.text} ' 的TO DO 记得及时处理`);
            return Object.assign({}, state, {
                todos: [{
                    time: action.time,
                    completed: false,
                    todo: action.text
                },
                    ...state.todos
                ]
            });
        
        case 'DELETE_TODO':
            console.log(`你已经删除了id为 ${action.time} 的TODO`);
            return Object.assign({}, state, {
                todos: state.todos.filter(todo => {
                    return todo.time !== action.time;
                })
            });
        
        case 'COMPLETE_TODO':
            console.log(`你已经完成了id为 ${action.time} 的TODO`);
            return Object.assign({}, state, {
                todos: state.todos.map(todo => {
                    return todo.time === action.time ?
                        Object.assign({}, todo, {done: !todo.done}) : todo
                })
            });
            
        default:
            return state;
    }
};

export default reducer;