import React from 'react';
import { Link } from 'react-router-dom';

import RegionDropDown from './ui/RegionDropDown';

import '../../css/navigation';

const homeTxt = 'Home';
const newsTxt = 'News';

function Navigation(){
    return (
        <nav className="navigation" role="navigation" aria-label="Main Menu">
            <ul role="menu">
                <li>
                    <Link role="menuitem" aria-label={homeTxt} to="/">{homeTxt}</Link>
                </li>
                <li>
                    <Link role="menuitem" aria-label={newsTxt} to="/news">{newsTxt}</Link>
                </li>
            </ul>
            <RegionDropDown />
        </nav>
    );
}

export default Navigation;
