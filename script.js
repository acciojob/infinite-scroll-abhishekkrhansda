
let ol = document.querySelector("#infi-list");
let count = 0;

function addItems(num) {

    for (let i = 0; i < num; i++) {
        count++;

        let li = document.createElement("li");
        li.textContent = `Item ${count}`;

        ol.appendChild(li);
    }
}

// Initially add 10 items
addItems(10);

// Listen for scrolling on the list
ol.addEventListener("scroll", () => {

    let scrollTop = ol.scrollTop;
    let clientHeight = ol.clientHeight;
    let scrollHeight = ol.scrollHeight;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        addItems(2);
    }

});

