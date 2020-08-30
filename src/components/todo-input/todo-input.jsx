import React from 'react'
import './todo-input.css'

const ToDoInput = ({value, onChange}) => {
    return (
        <section className="todo-input-wrapper">
            <input
                value={value}
                onChange={onChange}
                placeholder='Add tast'
                className="todo-input"
            />
            <i className="fa fa-plus" aria-hidden="true"></i>
        </section>
    )
}

export default ToDoInput;
