export function menu() {
    document.body.style.backgroundImage = "url('../src/assets/menu.webp')";

    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const containerOne = document.createElement("div");
    containerOne.classList.add("container");

    contentDiv.appendChild(containerOne);

    const paraOne = document.createElement("p");
    paraOne.textContent = "Pastries and Baked Goods";
    containerOne.appendChild(paraOne);


    const containerTwo = document.createElement("div");
    containerTwo.classList.add("container");

    contentDiv.appendChild(containerTwo);

    const paraTwo = document.createElement("p");
    paraTwo.textContent = "Ice Cream";
    containerTwo.appendChild(paraTwo);

    
    const containerThree = document.createElement("div");
    containerThree.classList.add("container");

    contentDiv.appendChild(containerThree);

    const paraThree = document.createElement("p");
    paraThree.textContent = "Beverages";
    containerThree.appendChild(paraThree);


    const containerFour = document.createElement("div");
    containerFour.classList.add("container");

    contentDiv.appendChild(containerFour);

    const paraFive = document.createElement("p");
    paraFive.textContent = "Snack Foods";
    containerFour.appendChild(paraFive);
}