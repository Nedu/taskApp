import React from 'react';
import { Button } from '@material-ui/core';

import './ErrorComponent.scss'
import { Link } from 'react-router-dom';

const ErrorComponent = () => {
    return (
        <div className='errorContainer'>
            <h1>404</h1>
            <h3>Ooops!</h3>
            <p>THAT PAGE DOES NOT EXIST OR IS UNAVAILABLE AT THE MOMENT</p>
            <Link to='/tasks' style={{ textDecoration: 'none'}}><Button variant='contained' color='primary'>Go Back to Home</Button></Link>
        </div>
    )
}

export default ErrorComponent;