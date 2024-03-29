export function home() {
    const bodyHome = document.querySelector("body");
    bodyHome.classList.remove("body-contact", "body-menu");
    bodyHome.classList.add("body-home");

    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();
    

    const container = document.createElement("div");
    container.classList.add("container");

    contentDiv.appendChild(container);

    const paraOne = document.createElement("p");
    paraOne.textContent = "The Big Donut is a store in Beach City that sells donuts, assorted food, and drink products.";
    container.appendChild(paraOne);

    const paraTwo = document.createElement("p");
    paraTwo.textContent = "The Big Donut opens at 7:00 but at 7:30 on Sundays.";
    container.appendChild(paraTwo);
}