import "./App.css";

import Box from "./components/Box";

function App() {
    return (
        <div className="container">
            <Box width={300} height={100} />
            <Box width={200} height={100} />
            <Box width={100} height={100} />
        </div>
    );
}

export default App;
