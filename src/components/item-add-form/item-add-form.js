import React, {Component} from "react";

import './item-add-form.scss';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) =>{
      this.setState({
          label: e.target.value
      });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {

        return (
                <form className = 'item-add-form d-flex'
                      onSubmit={this.onSubmit}>

                    <input id = 'inp'
                           type="text"
                           className='form-control'
                           onChange={this.onLabelChange}
                           placeholder="What needs to be done"
                           value={this.state.label}/>

                    <button id='clear'
                            className = 'btn btn-outline-secondary'>
                     <p> Add item</p>
                        
                    </button>

                </form>


        )

    }
}
