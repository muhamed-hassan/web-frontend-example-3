import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './fragments/Home';
import Fragment_1 from './fragments/Fragment_1';
import Fragment_2 from './fragments/Fragment_2';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/fragment_1" element={<Fragment_1 />} />
                        <Route path="/fragment_2" element={<Fragment_2 />} />
                    </Routes>
                </BrowserRouter>

                <Footer />
            </div>
        );
    }

}