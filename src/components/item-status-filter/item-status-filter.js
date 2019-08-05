import React, {Component} from 'react';

import './item-status-filter.scss'


export default  class ItemStatusFilter extends Component{

    buttons = [
        { name: 'all', label: 'All'},
        { name: 'active', label: 'Active'},
        { name: 'done', label: 'Done'}
    ];




    render() {

        const {filter, onFiltrChange} = this.props;


        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <span><button type = 'button'
                              className= {`btn ${clazz}`}
                              onClick={() => onFiltrChange(name)}
                              key={name}
                >{label}</button></span>

            );

        });

        return (
            <div className='item-status-filter d-flex'>
                {buttons}
            </div>
        );

    }

};






