import React, { Component } from 'react';
import {connect} from 'react-redux';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';
import './todo.css';

const TASKS = [
    {
        id: 1,
        text: 'Learn ReactJS',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Learn Redux',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Learn React Router',
        isCompleted: false,
    }
];



class ToDo extends Component {

    state = {
        textTask: '',
    };

    handleInputChange = ({target: {value}}) => {
        this.setState({
            textTask: value
        })
    };

    render() {
        const {textTask} = this.state;

        return (
            <div className="todo-wrapper" >
                <ToDoInput value={textTask} onChange={this.handleInputChange} />
                <ToDoList todos={TASKS}/>
                <Footer />
                <p>{textTask}</p>
            </div>
        )
    }
}
const mapStateToProps = () => {

}

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
