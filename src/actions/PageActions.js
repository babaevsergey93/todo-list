let nextId = 0;

export const increment = () => ({
    type: 'INCREMENT'
});

export const decrement = () => ({
    type: 'DECREMENT'
});

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextId += 1,
    text
});

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id
});

