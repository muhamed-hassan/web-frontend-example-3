import React from 'react';

export default class LoginForm extends React.Component {

    constructor() {

        super();
        this.state = { email: "", password: "" };

        // This binding is necessary to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleChange(event) {

        var changedFormElementId = event.target.id;
        switch (changedFormElementId) {
            case "email":
                this.setState({ email: event.target.value });
                break; 
            case "password":
                this.setState({ password: event.target.value });
                break; 
            default:
                throw new Error("Unknown changedFormElementId !!!");
        }   
    }

    handleSubmit(event) {

        event.preventDefault();

        alert("Submitted values: " + this.state.email + " | " + this.state.password);
    }

    resetForm(event) {

        event.preventDefault();

        this.setState({ email: "", password: "" });
    }

    render() {

        return (
            <form class="login-form">
                <div class="login-form-data">
                    <label for="email">Email:</label>
                    <input id="email" type="text" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div class="login-form-data">
                    <label for="password">Password:</label>
                    <input id="password" type="password" value={this.state.password} onChange={this.handleChange} />
                </div>

                <div class="login-form-actions">
                    <button id="login-btn" type="submit" onClick={this.handleSubmit}>Login</button>
                    <button id="cancel-btn" type="reset" onClick={this.resetForm}>Cancel</button>
                </div>
            </form>
        );
    }

}