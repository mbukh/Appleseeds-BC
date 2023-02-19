import "./App.css";
import { useRef } from "react";

function App() {
    const refImages = useRef([]);

    const handleMouseOver = (current) => {
        current.style.filter = "none";
    };

    const handleMouseLeave = (current) => {
        current.style.filter = "grayscale(100%)";
    };

    const genImage = () => {
        return (
            "https://source.unsplash.com/300x200/?" +
            Math.floor(Math.random() * 100)
        );
    };

    const imageArr = [];

    // Generate images with event listeners and initial grayscale filter
    for (let i = 0; i < 12; i++) {
        imageArr.push(
            <img
                src={genImage()}
                ref={(el) => refImages.current.push(el)}
                onMouseOver={() => handleMouseOver(refImages.current[i])}
                onMouseLeave={() => handleMouseLeave(refImages.current[i])}
                alt=""
                style={{ filter: "grayscale(100%)" }}
            />
        );
    }

    return (
        // Render the generated images
        <>{imageArr}</>
    );
}

export default App;
