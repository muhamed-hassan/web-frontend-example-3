import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    render() {
        
        return (
            <header>
                <div class="navigation-links">                    
                    <Link class="link" to="/">Home</Link>
                    <Link class="link" to="/login-form">Login form</Link>
                    <Link class="link" to="/registration-form">Registration form</Link>
                </div>
            </header>
        );
    }

}