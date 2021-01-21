import React from 'react'
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
    const todoList = useSelector(state => state)
    const renderItem = (todo) => {
        return <TodoItem key={todo.id} todo={todo} />
    }
    return (
        <div className="my-4">
            {todoList.map(renderItem)}

        </div>
    )
}

export default TodoList