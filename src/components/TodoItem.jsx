import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from '../redux/actions';

// const myObj = { name: 'Hoang', dob: '2002' };

// const { name: myName } = myObj;

// const myArray = ['Hoang', 2002]

// const [myName, birthday] = myArray;

function ToDoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();

  const onChangeText = (e) => {
    setName(e.target.value);
  };
  const onClickEditButton = () => {
    dispatch(updateTodo({
      ...todo,
      name: name
    }))
    setEditable(!editable);
  }
  const onClickDeleteButton = () => {
    dispatch(deleteTodo(todo.id))

  }

  let { id } = todo;

  if (todo.id.length > 1) {
    id = todo.id[2];
  }

  return (
    <div className="row mx-2 align-items-center" >

      <div>#{id}</div>

      <div className="col">
        {editable === true && <input type="text" className="form-control" value={name} onChange={onChangeText} />}
        {editable === false && <h4>{todo.name}</h4>}

      </div>

      <button onClick={onClickEditButton} className="btn btn-primary m-2" >{editable ? "Update" : "Edit"}</button>

      <button onClick={onClickDeleteButton} className="btn btn-danger m-2">Delete</button>
    </div>

  )
}

export default ToDoItem
