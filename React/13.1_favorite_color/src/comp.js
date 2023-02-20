import { useState, useEffect } from "react";

function Counter() {
    const [color, setColor] = useState("black");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(
            () => localStorage.setItem("i", ++i),
            1000
        );
        return () => {
            clearInterval(interval);
            localStorage.removeItem("i");
        };
    }, []);

    return (
        <>
            <h1>{color}</h1>
        </>
    );
}

export default Counter;
