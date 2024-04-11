import React from 'react';
import { Link } from 'react-router-dom';

export default class RegistrationForm extends React.Component {

    constructor() {

        super();
        this.state = { name: "", email: "", password: "", postalAddress: "", mobile: "" };

        // This binding is necessary to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleChange(event) {

        var changedFormElementId = event.target.id;
        switch (changedFormElementId) {
            case "name":
                this.setState({ name: event.target.value });
                break;
            case "email":
                this.setState({ email: event.target.value });
                break; 
            case "password":
                this.setState({ password: event.target.value });
                break; 
            case "postalAddress":
                this.setState({ postalAddress: event.target.value });
                break;
            case "mobile":
                this.setState({ mobile: event.target.value });
                break;
            default:
                throw new Error("Unknown changedFormElementId !!!");
        }   
    }

    handleSubmit(event) {

        event.preventDefault();

        alert("Submitted values: " + this.state.name + " | "  + this.state.email + " | " 
            + this.state.password + " | " + this.state.postalAddress + " | " + this.state.mobile);
    }

    resetForm(event) {

        event.preventDefault();

        this.setState({ name: "", email: "", password: "", postalAddress: "", mobile: "" });
    }

    render() {

        return (
            <div class="container">
                <form class="registration-form">
                    <div class="registration-form-data">
                        <label for="name">Name:</label>
                        <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    
                        <label for="email">Email:</label>
                        <input id="email" type="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div class="registration-form-data">
                        <label for="password">Password:</label>
                        <input id="password" type="password" value={this.state.password} onChange={this.handleChange} />

                        <label for="postalAddress">Postal address:</label>
                        <input id="postalAddress" type="text" value={this.state.postalAddress} onChange={this.handleChange} />
                    </div>

                    <div class="registration-form-data">
                        <label for="mobile">Mobile:</label>
                        <input id="mobile" type="text" value={this.state.mobile} onChange={this.handleChange} />
                    </div>

                    <div class="registration-form-actions">                        
                        <button id="register-btn" type="submit" onClick={this.handleSubmit}>Register</button>
                        <button id="cancel-btn" type="reset" onClick={this.resetForm}>Cancel</button>
                    </div>
                </form>

                <Link class="back-to-main" to="/">Back to main page</Link>
            </div>
        );
    }

}