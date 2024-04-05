import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header />

                <SearchBar />

                <Footer />
            </div>
        );
    }

}