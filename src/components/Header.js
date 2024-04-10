import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    render() {
        
        return (
            <header>
                <div class="navigation-links">                    
                    <Link class="link" to="/login-form">Login Form</Link>
                    <Link class="link" to="/registration-form">Registration Form</Link>
                </div>
            </header>
        );
    }

}