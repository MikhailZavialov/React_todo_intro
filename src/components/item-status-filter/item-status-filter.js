import React, {Component} from 'react';

import './item-status-filter.scss'


export default  class ItemStatusFilter extends Component{

    render() {
       // const {} = this.props;

        return (
            <div className='item-status-filter d-flex'>

                <span><button type = 'button'
                              className='btn btn-info'>All</button></span>
                <button type = 'button'
                              className='btn btn-outline-secondary'>Active</button>
                <button type = 'button'
                              className='btn btn-outline-secondary'>Done</button>

            </div>
        );

    }

};






