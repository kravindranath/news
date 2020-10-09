import React from 'react';

function SearchBox(_props){
    let props = _props || {};
    let inpRef = props.inpRef;
    let onChangeHandler = props.onChangeHandler;
    let searchTerm = props.searchTerm || '';
    let hasKeyword = (searchTerm.length > 0);
    let totalarticles = props.totalarticles || 0;
    return (
        <div className="SearchBox">
            <input ref={inpRef} onChange={onChangeHandler} type="search" placeholder="Search for Latest News..." />
            { hasKeyword &&
                <div className="res-msg">{`Showing ${totalarticles} results for '${searchTerm}'`}</div>
            }
        </div>
    );
}
export default SearchBox;