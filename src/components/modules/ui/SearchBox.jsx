import React from 'react';

/**
 * Render Search input Box with onChange
 * @param {Object} _props component props
 */
function SearchBox(_props) {
    let props = _props || {};
    let inpRef = props.inpRef;
    let onChangeHandler = props.onChangeHandler;
    let searchTerm = props.searchTerm || '';
    let hasKeyword = (searchTerm.length > 0);
    let totalarticles = props.totalarticles || 0;
    let searchMsg = `Showing ${totalarticles} results for '${searchTerm}'`;

    return (
        <div className="SearchBox">
            <input ref={inpRef} onChange={onChangeHandler} type="search" placeholder="Search for Latest News..." />
            { hasKeyword &&
                <div aria-label={searchMsg} className="res-msg">{searchMsg}</div>
            }
        </div>
    );
}
export default SearchBox;