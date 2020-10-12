import React from 'react';

/**
 * Main layout wrapper for the app
 * @param {Object} _props component props
 */
function MainLayout(_props) {
    var props = _props || {};

    return (
        <div className="mainLayout">
            {props.children}
        </div>
    );
}

export default MainLayout;
