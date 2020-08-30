import React from 'react'
import './todo-item.css'
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ToDoItem = ({isCompleted, text}) => {
    console.log(isCompleted)
    return (
        <li className='todo-item'>
            <i className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
            <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
            <i className="fa fa-times" aria-hidden="true"></i>
        </li>
    )
}
ToDoItem.propTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
}

ToDoItem.defaultProps = {
    text: '',
    isCompleted: false,
}
export default ToDoItem;
