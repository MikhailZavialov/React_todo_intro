import React, {Component} from 'react';

import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import './app.scss'


export default class App extends Component{

    maxId = 100;


    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Do some work'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ],
        term: ''
    };

    cloneTodoArr = [...this.state.todoData];

    createTodoItem(label) {
        return {
            label, important: false, done: false, id: this.maxId++
        }
    }

    deleteItem = (id) =>{
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
           // todoData.splice(idx);                                    change todoData
            const newArray = [                                          // not to change todoData
                ...todoData.slice(0, idx),                          // array distructurization
                ...todoData.slice(idx + 1)
            ];
            return{
                todoData : newArray
            }
        })
    };

    addItem = (text) =>{

        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) =>{

            const newArr = [...todoData,newItem];
            console.log(newArr);

            return {
                todoData : newArr
            }
        });
    };

    toggleProperty(arr, id, propName){
        const idx = arr.findIndex((el) => el.id === id);
        const  oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};  // spread op

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)

        ];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) =>{
            return{
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

     onToggledDone = (id) => {
            this.setState(({todoData}) =>{
                return{
                    todoData: this.toggleProperty(todoData, id, 'done')
                };
            });
    };


    searchItem = (text) => {

        this.setState(({todoData}) =>{

            todoData = [...this.cloneTodoArr];

            let resArr = todoData.filter(el => el.label.indexOf(text) !== -1);

            return{
                todoData: resArr
            };

        })
    };

    ClickDone = () => {
        this.setState(({todoData}) =>{
            const doneArr = todoData.filter((el) => el.done);
            return{
            todoData: doneArr
            }
        })
    };


    ClickAll = () => {
        this.setState(() =>{
            return{
                todoData: this.cloneTodoArr
            }
        })
    };


    ClickAtive = () => {
        this.setState(({todoData}) =>{
            const impArr = todoData.filter((el) => el.important);

            return{
                todoData: impArr
            }
        })
    };


    search(items, term){

        if(term.label === 0){
            return items;
        }

        return  items.filter((item) => {
            return item.label.indexOf(term) > -1;

        });

    }





    render() {

        const  {todoData, term} = this.state;

        const visibleItems = this.search(todoData, term);

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="app">

                <AppHeader  toDo={todoCount} done={doneCount}/>

                <div className='d-flex'>
                    <SearchPanel
                            onItemSearch = {this.searchItem}

                    />

                    <ItemStatusFilter

                            onClickDone={this.ClickDone}
                            onClickAll={this.ClickAll}
                            onClickActive={this.ClickAtive}


                    />

                </div>

                <TodoList
                    todos={visibleItems}
                    onDeleted={ this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggledDone={this.onToggledDone}
                />

                <ItemAddForm
                    onItemAdded = {this.addItem}
                />
            </div>
        );
    }
};
