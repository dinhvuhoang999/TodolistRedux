export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo,
        // name: todo.name,
        // id:todo.id
    }
}


export function deleteTodo(todoId) {
    return {
        type: DELETE_TODO,
        payload: todoId,
    }
}
export function updateTodo(todoId) {
    return {
        type: UPDATE_TODO,
        payload: todoId,
    }
}