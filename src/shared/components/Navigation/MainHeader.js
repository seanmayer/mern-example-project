import React from "react";

import './MainHeader.css';

const MainHeader = props => {
    return <head className="main-header">
        {props.children}
    </head>
};

export default MainHeader;