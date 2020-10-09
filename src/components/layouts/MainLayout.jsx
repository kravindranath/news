import React from 'react';

function MainLayout(_props){
    var props = _props || {};
    
    return(
        <div className="mainLayout">
            {props.children}
        </div>
    );
}

export default MainLayout;
