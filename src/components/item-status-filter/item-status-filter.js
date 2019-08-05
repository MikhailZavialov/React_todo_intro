import React, {Component} from 'react';

import './item-status-filter.scss'


export default  class ItemStatusFilter extends Component{


    ClickButDone = () => {
    this.props.onClickDone();
    };
    ClickButAll = () => {
        this.props.onClickAll();
    };
    ClickButActive = () => {
        this.props.onClickActive();
    };


    render() {

        return (
            <div className='item-status-filter d-flex'>

                <span><button type = 'button'
                              id='style'
                              className='btn btn-outline-secondary'
                              onClick={this.ClickButAll}
                >All</button></span>
                <button type = 'button'
                              id='style'
                              className='btn btn-outline-secondary'
                              onClick={this.ClickButActive}

                >Active</button>
                <button type = 'button'
                              id='style'
                              className='btn btn-outline-secondary'
                              onClick={this.ClickButDone}

                >Done
                </button>

            </div>
        );

    }

};






