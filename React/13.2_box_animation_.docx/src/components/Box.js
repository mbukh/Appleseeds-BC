import "../styles/Box.css";
import React, { useState, useEffect } from "react";

function Box({ width, height }) {
    const [showBox, setShowBox] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowBox(true);
            setTimeout(() => setShowBox(false), 4000);
        }, 1000);
    }, []);

    return showBox ? (
        <div className="Box" style={{ width: width, height: height }}></div>
    ) : (
        <div></div>
    );
}

export default Box;
