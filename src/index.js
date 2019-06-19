import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'


const App = () => {
    const isLoggedIn = true;
    const WelcomeBox = <span> Welcome Back </span>;
    const loginBox = <span> Log in please </span>;       // element
    return (
        <div>
            { isLoggedIn ? WelcomeBox : loginBox }        {/* React element */}
            <AppHeader />                               {/* React component */}
            <SearchPanel />
            <TodoList />
        </div>
    );
};

    ReactDOM.render(<App />,
        document.getElementById('root'));