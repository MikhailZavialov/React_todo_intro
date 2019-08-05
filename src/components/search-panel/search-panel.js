import React, {Component} from "react";

import './search-panel.scss'



export default class SearchPanel extends Component {

state = {
    term: ''
};


   onLabelChange = (e) => {

   const term =  e.target.value;
   this.setState({term});
   this.props.onSearchChange(term);

};

    render() {
        return (
            <form className= 'input-group mb-3  search-panel'>
                <input
                    className="form-control"
                    placeholder= 'tab to search'
                    onChange={this.onLabelChange}
                    value={this.state.term}

                />

            </form>


        );


    }

};
