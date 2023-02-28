import "./App.css";
import { Component } from "react";

class Box extends Component {
    constructor({ style }) {
        super();
        this.style = style;
    }

    render() {
        return (
            <div className="box" style={this.style}>
                BOX
            </div>
        );
    }
}

class App extends Component {
    state = { mountBox: true };

    componentDidMount() {
        console.log("App mounted", this.state);
        setTimeout(() => {
            this.setState((prev) => {
                console.log("App new state", !prev.mountBox);
                return { mountBox: !prev.mountBox };
            });
        }, 4000);
    }

    render() {
        return (
            this.state.mountBox && (
                <>
                    <Box
                        style={{
                            top: "0",
                            width: "100px",
                            height: "100px",
                            backgroundColor: "#a33",
                        }}
                    />
                    <Box
                        style={{
                            top: "110px",
                            width: "200px",
                            height: "200px",
                            backgroundColor: "#3a3",
                        }}
                    />
                    <Box
                        style={{
                            top: "320px",
                            width: "300px",
                            height: "300px",
                            backgroundColor: "#33a",
                        }}
                    />
                </>
            )
        );
    }
}

export default App;
