import React from 'react';
import './todo.css';

const Todo = (props) => {
    return (
        <div>
            <p className="p">{props.todo}</p>
        </div>
    );
};

export default Todo;
