import React from 'react';

// TODO: add table in JSX generation instead of simple-formatted records besides enhancing NO-DATA msg
export default class SearchBar extends React.Component {

    constructor() {
        super();
        this.state = { searchedResult: null, didSearch: false };

        // This binding is necessary to make `this` work in the callback
        this.search = this.search.bind(this);
    }

    search() {
        var keyword = document.getElementById("search-box-input").value;
        this.displayResult(keyword);
    }

    displayResult(keyword) {
        console.log(">> " + keyword);

        // dummy data for practice
        // IN-ACTION: you should call a backend REST-API
        var countries = [
            { name: "Belgium", continent: "Europe" },
            { name: "India", continent: "Asia" },
            { name: "Bolivia", continent: "South America" },
            { name: "Ghana", continent: "Africa" },
            { name: "Japan", continent: "Asia" },
            { name: "Canada", continent: "North America" },
            { name: "New Zealand", continent: "Australasia" },
            { name: "Italy", continent: "Europe" },
            { name: "South Africa", continent: "Africa" },
            { name: "China", continent: "Asia" },
            { name: "Paraguay", continent: "South America" },
            { name: "Usa", continent: "North America" },
            { name: "France", continent: "Europe" },
            { name: "Botswana", continent: "Africa" },
            { name: "Spain", continent: "Europe" },
            { name: "Senegal", continent: "Africa" },
            { name: "Brazil", continent: "South America" },
            { name: "Denmark", continent: "Europe" },
            { name: "Mexico", continent: "South America" },
            { name: "Australia", continent: "Australasia" },
            { name: "Tanzania", continent: "Africa" },
            { name: "Bangladesh", continent: "Asia" },
            { name: "Portugal", continent: "Europe" },
            { name: "Pakistan", continent: "Asia" },
        ];

        var regex = new RegExp("[a-zA-Z0-9 ]*(" + keyword + ")[a-zA-Z0-9 ]*", "gi");
        console.log("## RegExp: " + regex);
        var collectedResult = [];
        for (var cursor = 0; cursor < countries.length; cursor++) {
            if (countries[cursor].name.search(regex) > -1) {
                collectedResult.push(<tr><td>{countries[cursor].name}</td><td>{countries[cursor].continent}</td></tr>);
            }
        }
        console.log("## " + collectedResult.length);

        this.setState({ searchedResult: collectedResult, didSearch: true });
    }

    render() {

        var result;
        if (this.state.didSearch) {
            if (this.state.searchedResult.length > 0) {
                result = <table>
                            <tr>
                                <th>Name</th>
                                <th>Continent</th>
                            </tr>
                            {this.state.searchedResult}
                        </table>;
            } else {
                result = "NO DATA FOUND !!!";
            }
        }

        return (
            <div>
                <div class="search-box">
                    <input id="search-box-input" type="text" class="search-box-input" />
                    <button type="button" class="search-box-button" onClick={this.search}>Search</button>
                </div>

                <div id="search-result" class="search-result">
                    {result}
                </div>
            </div>
        );
    }

}