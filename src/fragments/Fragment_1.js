import React from 'react';
import { Link } from 'react-router-dom';

// Add login-form here with some adjustments
export default class Fragment_1 extends React.Component {

    render() {
        return (
            <div class="container">
                <p>Content of Fragment_1 goes here</p>
                <Link class="back-to-main" to="/">Back to main page</Link>
            </div>
        );
    }

}