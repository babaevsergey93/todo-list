const initialState = {
    count: 0,
    todos: []
};

export default function counter(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1};
        case 'DECREMENT':
            return {...state, count: state.count - 1};
        case 'ADD_TODO': {
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        id: action.id
                    }
                ]
            })
        }
        case 'DELETE_TODO': {
            return Object.assign({}, state, {
                todos: state.todos.filter(item => item.id !== action.id)
            })
        }
        default:
            return state;
    }
}