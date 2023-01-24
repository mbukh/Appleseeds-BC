function cE({ tag = "div", style = "", data = {} }) {
    const el = document.createElement(tag);
    el.style = style;
    el.dataset = data;
}

const table = cE('div', 'display: grid; ')
