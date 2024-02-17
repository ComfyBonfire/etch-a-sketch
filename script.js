const container = document.querySelector('#container');
const btn = document.querySelector('button');
let random  = Math.floor((Math.random() * 255) + 1);

for (let i = 0; i < 240; i++) {
        const new_cell = document.createElement("div");
        new_cell.classList.add("cell");
        let mouseOver = function() { new_cell.style.backgroundColor = `darkblue`
        };
        new_cell.onmouseover = mouseOver;
        container.appendChild(new_cell);
};

function reloadPage() {
    window.location.reload();
}