import React from "react";
import './app-header.scss';

const AppHeader = ({toDo, done}) => {
    return (
        <div className='app-header d-flex'>
            <h1> Todo List</h1>
            <span> {toDo} more to do, {done} done</span>
        </div>
        );
};

export default AppHeader;