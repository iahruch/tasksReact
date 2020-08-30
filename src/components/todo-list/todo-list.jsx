import React from 'react';
import ToDoItem from './../todo-item/todo-item';
import './todo-list.css';

const TodoList = ({todos}) => {
    return (
        <ul className="todo-list">
            {
                todos.map( ({id,text,isCompleted}) =>
                    <ToDoItem key={id} text={text} isCompleted={isCompleted} />
                )
            }
        </ul>
    )
}

export default TodoList;
