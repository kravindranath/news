import React from 'react';
import { Link } from 'react-router-dom';

import RegionDropDown from './ui/RegionDropDown';

import '../../css/navigation';

function Navigation(){
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
                <li>
                    <Link to="/news/12345">Article</Link>
                </li>
            </ul>
            <RegionDropDown />
        </nav>
    );
}

export default Navigation;
