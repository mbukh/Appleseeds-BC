import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef();

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} value={inputValue} onInput={handleInput} />;
}

export default App;
