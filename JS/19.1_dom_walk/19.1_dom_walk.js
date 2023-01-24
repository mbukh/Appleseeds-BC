window.addEventListener("load", (e) => startTask());

function startTask() {
    const li2Element = document.querySelector("ul li.start-here");
    li2Element.innerText = "main title";

    const li = document.createElement("li");
    li.textContent = "title 4";
    const ulParent = document.querySelector("ul");
    ulParent.appendChild(li);

    ulParent.lastChild.remove();
    // or
    // ulParent.removeChild(ulParent.lastChild);

    document.title = "Master Of The Dom";

    document.querySelector("p").innerText = "Ok. Show me\nwhat you got.";
}
