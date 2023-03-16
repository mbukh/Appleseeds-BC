import "./App.css";
import React, { Component } from "react";
import axios from "axios";

class GetCountries extends Component {
    state = {
        loading: false,
        data: null,
        error: null,
    };

    source = axios.CancelToken.source();

    componentDidMount() {
        this.setState({ loading: true });

        axios
            .get("https://restcountries.com/v3.1/all", {
                cancelToken: this.source.token,
            })
            .then((response) => {
                this.setState({
                    loading: false,
                    data: response.data,
                });
            })
            .catch((error) => {
                if (axios.isCancel(error)) {
                    console.log("Request canceled:", error.message);
                } else {
                    this.setState({
                        loading: false,
                        error: error.message,
                    });
                }
            });
    }

    componentWillUnmount() {
        console.log("Request canceled by unmounting component");
        this.source.cancel("Request canceled by unmounting component.");
    }

    render() {
        const { loading, data, error } = this.state;
        return (
            <div>
                {loading && <p>Loading...</p>}
                {data && (
                    <div>
                        {data.map((country, index) => {
                            return <p key={index}>{country.name.common}</p>;
                        })}
                    </div>
                )}
                {error && <p>Error: {error}</p>}
            </div>
        );
    }
}
class App extends Component {
    constructor() {
        super();
        this.state = { toggle: false };
    }

    toggleHandler() {
        this.setState({ toggle: this.state.toggle ? false : true });
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.toggleHandler.bind(this)}>Toggle</button>
                {this.state.toggle && <GetCountries />}
            </div>
        );
    }
}

export default App;
