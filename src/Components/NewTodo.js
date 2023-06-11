import React, { useState } from 'react';
import './newTodo.css';

const NewTodo = (props) => {
    const [todo, setTodo] = useState('');

    const handleChange = (event) => {
        setTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onNewTodo(todo);
        setTodo('');
    };
    return (
        <div className="newTodo">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Todo : </label>
                <input placeholder="Enter your text here" type="text" name="todo" id="todo" value={todo} onChange={handleChange} />
                <br />
                <button className="button">Submit</button>
            </form>
        </div>
    );
};

export default NewTodo;
