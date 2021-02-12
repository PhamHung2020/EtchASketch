const container = document.querySelector('.container');
const colors = ['red', 'orange', 'green', 'blue', 'grey', 'aqua', 'violet', 'pink', 'yellow', 'brown', 'darkgoldenrod', 'lightgreen', 'chocolate', 'cadetblue', 'darkkhaki', 'fuchsia'];


function changeBackgroundColor(node)
{
    let randomNumber = Math.floor(Math.random() * 16);
    node.style['background-color'] = colors[randomNumber];
}


function clearGrid()
{
    let childList = container.childNodes;
    while (childList[0] != null)
    {
        container.removeChild(childList[0]);
    }
}

function createGrid(num) {
    container.style['grid-template-columns'] = `repeat(${num}, 1fr)`;
    for (let i = 0; i < num * num; ++i) {
        let div = document.createElement('div');
        div.classList.add('container-element');
        div.addEventListener('mouseover', () => 
        {
            changeBackgroundColor(div);
        })
        container.appendChild(div);
    }
}

createGrid(4);

document.querySelector('#changeSizeButton').addEventListener('click', () => 
{
    const input = document.querySelector('input');
    let num = Number(input.value);
    if (num < 1 || num > 64) return;
    console.log(num);
    clearGrid();
    createGrid(num);
})