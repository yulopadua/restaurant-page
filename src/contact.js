export function contact() {
    document.body.style.backgroundImage = "url('../src/assets/contact.webp')";

    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const container = document.createElement("div");
    container.classList.add("container");

    contentDiv.appendChild(container);

    const paraOne = document.createElement("p");
    paraOne.textContent = "Please contact Bill Dewey";
    container.appendChild(paraOne);

}