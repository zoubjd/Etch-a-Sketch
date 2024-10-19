let bigcontainer = document.querySelector('.bigcontainer');

let gridsize = 16;

let button = document.querySelector("button");
button.addEventListener("click", () => {
    var newgrid;
    do {
        newgrid = prompt("Enter the new size of the grid");
    }while(newgrid < 1 || newgrid > 99);
    printgrid(newgrid);
})
    


for(let i = 0; i < gridsize; i++) {
    let container = document.createElement("div");
    container.classList.add("container");
    for(let j = 0; j < gridsize; j++)
    {
        let div = document.createElement("div");
        div.addEventListener("mouseover", () => {
            let red = Math.floor(Math.random() * 256); 
            let green = Math.floor(Math.random() * 256); 
            let blue = Math.floor(Math.random() * 256); 
            div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        })
        container.appendChild(div);
    }
    bigcontainer.appendChild(container);
}

function printgrid(newgrid) {
    bigcontainer.innerHTML = '';
    for(let i = 0; i < newgrid; i++) {
        let container = document.createElement("div");
        container.classList.add("container");
        for(let j = 0; j < newgrid; j++)
        {
            let div = document.createElement("div");
            div.addEventListener("mouseover", () => {
                let red = Math.floor(Math.random() * 256); 
                let green = Math.floor(Math.random() * 256); 
                let blue = Math.floor(Math.random() * 256); 
                div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
            })
            container.appendChild(div);
        }
        bigcontainer.appendChild(container);
    }
}
