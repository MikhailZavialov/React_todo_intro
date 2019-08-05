import  React from 'react';
import './todo-list-item.scss';


const  TodoListItem = ({label, onDeleted, onToggleImportant, onToggledDone, important, done}) => {

    let classNames = 'todo-list-item';

    if (done){
        classNames += ' done';
    }

    if (important) {
        classNames += ' important'
    }

        return (

            <span  className= {classNames}>
                <span className='todo-list-item-label'
                      onClick={ onToggledDone }>
                      {label}
                </span>

                <button type="button" className='btn btn-outline-success btn-sm col1'
                        onClick={onToggleImportant} >

                    <i className='fa fa-exclamation'  />
                </button>

                      <button type='button' className='btn btn-outline-danger btn-sm col2'
                        onClick={onDeleted}>
                    <i className='fa fa-trash-o '/>
                </button>

        </span>
        );
};

export default TodoListItem;