import { useState } from "react";
import "./App.css";
import Counter from "./comp";

function App() {
    const [visible, setVisible] = useState(true);

    return (
        <>
            {visible && <Counter />}
            <div
                id="stam"
                style={{ background: "black", width: "400px", height: "50px" }}
                onClick={() => setVisible(!visible)}
            ></div>
        </>
    );
}

export default App;
