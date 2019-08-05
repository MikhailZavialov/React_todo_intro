import React from "react";
import './todo-list.scss';
import TodoListItem from '../todo-list-item';



const TodoList = ({todos, onDeleted, onToggleImportant, onToggledDone}) => {

    const elements = todos.map((item) => {

    const {id,  ...itemProps} = item;

       return (

           <li key={item.id} className="list-group-item">
               <TodoListItem {...itemProps }
               onDeleted={() => onDeleted(id)}
               onToggleImportant={() => onToggleImportant(id)}
               onToggledDone={() => onToggledDone(id)}
               />

           </li>
       );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;