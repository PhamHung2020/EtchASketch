const container = document.querySelector('.container');
function createGrid(num) {
    container.style['grid-template-columns'] = `repeat(${num}, 1fr)`;
    for (let i = 0; i < num * num; ++i) {
        let div = document.createElement('div');
        div.classList.add('container-element');
        container.appendChild(div);
    }
}

createGrid(5);
