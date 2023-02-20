import "./App.css";

function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function App() {
    return <div style={{ width: "50px", height: "50px" }}></div>;
}

export default App;
