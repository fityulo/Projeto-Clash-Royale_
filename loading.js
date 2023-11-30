function showLoading() {
    const div = document.createElement("div");
    div.classList.add("loading", "end");

    const label = document.createElement("label");
    label.innerText = "><Loading... Please wait><";

    div.appendChild(label);

    document.body.appendChild(div);
}

function hideLoading() {
    const loadings = document.getElementsByClassName("loading");
    if (loadings.length) {
        loadings[0].remove();
    }
}