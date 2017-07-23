let id = 1;
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text: text,
        id: id++,
    }
}
export const showAll = () => {
    return {
        type: 'SHOW_ALL',
    }
}