import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
    <div className='header'>
        <Link to='/tasks'>Task App</Link>
    </div>
)

export default Header;