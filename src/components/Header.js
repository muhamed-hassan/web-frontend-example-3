import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <div class="navigation-links">                    
                    <Link class="link" to="/fragment_1">Fragment_1</Link>
                    <Link class="link" to="/fragment_2">Fragment_2</Link>
                </div>
            </header>
        );
    }

}