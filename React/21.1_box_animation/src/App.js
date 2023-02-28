import "./App.css";
import { Component } from "react";

class Box extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div
                className="box"
                style={{
                    top: this.props.top,
                    width: this.props.width,
                    height: this.props.height,
                    backgroundColor: this.props.backgroundColor,
                }}
            >
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
                        top="0"
                        width="100px"
                        height="100px"
                        backgroundColor="#a33"
                    />
                    <Box
                        top="110px"
                        width="200px"
                        height="200px"
                        backgroundColor="#3a3"
                    />
                    <Box
                        top="320px"
                        width="300px"
                        height="300px"
                        backgroundColor="#33a"
                    />
                </>
            )
        );
    }
}

export default App;
