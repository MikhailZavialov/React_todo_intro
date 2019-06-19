import React from "react";

import TodoListItem from './todo-list-item';

const TodoList = () => {
    const items = ['Learn React', 'Build Awersome App'];
    return (
        <ul>
            <li> { items.map((el) => (el + ' and '))} </li>
            <li> { items[1] }</li>
            <li> Drink Tea</li>
            <li>Walk for away</li>
            <li> <TodoListItem /></li>
        </ul>
    );
};

export default TodoList;