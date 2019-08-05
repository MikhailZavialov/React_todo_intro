import React, {Component} from "react";

import './search-panel.scss'



export default class SearchPanel extends Component {




    onLabelChange = (e) => {

    this.props.onItemSearch(e.target.value);

};

    render() {
        return (
            <form className= 'input-group mb-3  search-panel'>
                <input
                    className="form-control"
                    placeholder= 'tab to search'
                    onChange={this.onLabelChange}

                />

            </form>


        );


    }

};
