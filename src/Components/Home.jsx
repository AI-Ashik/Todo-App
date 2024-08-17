import React, { useState } from 'react';
import NewTodo from './NewTodo';
import Todos from './Todos';

const data = ['data1', 'data2'];
const Home = () => {
    const [todos, setNewTodo] = useState(data);
    const handleNewTodoData = (newData) => {
        setNewTodo([...todos, newData]);
    };
    return (
        <div>
            <NewTodo onNewTodo={handleNewTodoData} />
            <Todos todos={todos} />
        </div>
    );
};

export default Home;
