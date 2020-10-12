import React from 'react';
import { Link } from 'react-router-dom';

import RegionDropDown from './ui/RegionDropDown';

import '../../css/navigation';

const homeTxt = 'Home';
const sourcesTxt = 'News From Sources';

/**
 * Function to render the main navigation in the App
 */
function Navigation() {
    return (
        <nav className="navigation" role="navigation" aria-label="Main Menu">
            <ul role="menu">
                <li>
                    <Link role="menuitem" aria-label={homeTxt} to="/">{homeTxt}</Link>
                </li>
                <li>
                    <Link role="menuitem" aria-label={sourcesTxt} to="/sources">{sourcesTxt}</Link>
                </li>
            </ul>
            <RegionDropDown />
        </nav>
    );
}

export default Navigation;
