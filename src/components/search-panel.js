import React from "react";

const SearchPanel = () => {                              // component
    const PleceHold = 'Type to Search';

    const searchStyle = {                               // css style
        fontSize: '15px'
    };

    return <input style={searchStyle} placeholder= {PleceHold}/>;  // css in style={}
};

export default SearchPanel;