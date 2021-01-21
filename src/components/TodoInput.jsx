import React, { useState } from 'react'
import { addTodo } from '../redux/actions'
import { v1 as uuid } from 'uuid'
import { useDispatch } from "react-redux";

function ToDoInput() {
    const [name, setName] = useState();
    const dispatch = useDispatch();

    const onChangeInputUpdate = (e) => {
        setName(e.target.value)
    }
    const onClickAddButton = () => {
        dispatch(addTodo({ id: uuid(), name: name }))
        setName('');
    }
    return (
        <div>
            <h3>ToDoInput</h3>
            <div className="row m-2">
                <input
                    onChange={onChangeInputUpdate}
                    value={name}
                    type="text"
                    className="col form-control" />

                <button onClick={onClickAddButton}>Add</button>
            </div>
        </div>
    )
}

export default ToDoInput
