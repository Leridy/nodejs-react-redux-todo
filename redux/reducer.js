/**
 * Created by Leridy on 2016/11/19.
 */

/*
 * TODO 生成每一条todo的 id
 * 以时间戳作为id，
 * */
let genId = function (state) {
    return Date.now();
};

let reducer = function (state, action) {
    
    switch (action.type) {
        case 'ADD_TODO':
            console.log(`你已经添加了一条内容是 ' ${action.text} ' 的TO DO 记得及时处理`);
            return Object.assign({}, state, {
                todos: [{
                    id: genId(),
                    completed: false,
                    text: action.text
                },
                    ...state.todos
                ]
            });
        
        case 'DELETE_TODO':
            console.log(`你已经删除了id为 ${action.id} 的TODO`);
            return Object.assign({}, state, {
                todos: state.todos.filter(todo => {
                    return todo.id !== action.id;
                })
            });
        
        case 'COMPLETE_TODO':
            console.log(`你已经完成了id为 ${action.id} 的TODO`);
            return Object.assign({}, state, {
                todos: state.todos.map(todo => {
                    return todo.id === action.id ?
                        Object.assign({}, todo, {completed: !todo.completed}) : todo
                })
            });
            
        default:
            return state;
    }
};

export default reducer;