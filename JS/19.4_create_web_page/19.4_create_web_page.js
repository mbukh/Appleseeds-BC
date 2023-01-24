// Body
document.body.style.margin = "10px";
document.body.style.padding = "10px";
document.body.style.background = "#030303";
document.body.style.color = "#030303";
document.body.style.overflow = "hidden";
// Container
const container = newElement("div", { width: "100%", height: "100%" });
container.style.backgroundColor = "#4158D0";
container.style.backgroundImage =
    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
document.body.appendChild(container);
// Global Event Listeners
window.addEventListener("load", generateGrid);
window.addEventListener("resize", generateGrid);
// Generate/Regenerate Grid
function generateGrid() {
    // Recursive remove old grid
    const oldGrid = document.querySelector(".mainGrid");
    if (oldGrid) clear(oldGrid);

    const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    // Grid Settings
    const cellSize = 100;
    const cellCountWidth = Math.floor(windowWidth / cellSize);
    const cellCountHeight = Math.floor(
        (cellCountWidth / windowWidth) * windowHeight
    );
    const mainGrid = newElement("div", "mainGrid", {
        display: "grid",
        gridTemplateColumns: `repeat(${cellCountWidth},1fr)`,
        gridTemplateRows: `repeat(${cellCountHeight},1fr)`,
        gap: "1px",
        width: "100%",
        height: "100%",
    });
    container.appendChild(mainGrid);

    // Build rows and columns of cells and add to DOM
    for (let i = 0; i < cellCountWidth; i++) {
        for (let j = 0; j < cellCountHeight; j++) {
            const cell = newElement(
                "div",
                "cell",
                {
                    border: "1px solid #ccc",
                    aspectRatio: "1/1",
                    background: "#030303",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    font: "normal 400 28px sans-serif",
                    color: "transparent",
                },
                { winner: "MOshe" }
            );
            cell.textContent = "I ❤️‍🔥 JS".split(" ")[
                Math.floor(Math.random() * 3)
            ];
            // Cell mouse events
            cell.addEventListener("mouseenter", handleMouseOver);
            cell.addEventListener("mouseover", handleMouseOver);
            cell.addEventListener("mouseleave", handleMouseOut);
            cell.addEventListener("mouseout", handleMouseOut);
            // Add cell to DOM / mainGrid
            mainGrid.appendChild(cell);
        }
    }
}
// Reveal cell
function handleMouseOver(e) {
    e.target.style.background = "transparent";
    e.target.style.color = "#030303";
    e.target.style.transition = "none";
}
// Dim cell
function handleMouseOut(e) {
    e.target.style.background = "#030303";
    e.target.style.color = "transparent";
    e.target.style.transition = "all 0.5s linear";
}

// Helper Function to create a new html Element
function newElement(tag = "div", className = "", style = {}, dataset = {}) {
    const el = document.createElement(tag);
    for (const prop in style) {
        el.style[prop] = style[prop];
    }
    for (const data in dataset) {
        el.dataset[data] = dataset[data];
    }
    el.classList = className;
    return el;
}

// Helper function from stackoverflow to recursively clear a node
function clearInner(node) {
    while (node.hasChildNodes()) {
        clear(node.firstChild);
    }
}
function clear(node) {
    while (node.hasChildNodes()) {
        clear(node.firstChild);
    }
    node.parentNode.removeChild(node);
}
