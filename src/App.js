import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './fragments/Home';
import LoginForm from './fragments/LoginForm';
import RegistrationForm from './fragments/RegistrationForm';

export default class App extends React.Component {

    render() {
        
        return (
            <div>
                <BrowserRouter>
                    <Header />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login-form" element={<LoginForm />} />
                        <Route path="/registration-form" element={<RegistrationForm />} />
                    </Routes>
                </BrowserRouter>

                <Footer />
            </div>
        );
    }

}