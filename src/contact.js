export function contact() {
    const bodyContact = document.querySelector("body");
    bodyContact.classList.remove("body-home", "body-menu");
    bodyContact.classList.add("body-contact");

    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const container = document.createElement("div");
    container.classList.add("container");

    contentDiv.appendChild(container);

    const paraOne = document.createElement("p");
    paraOne.textContent = "Please contact Bill Dewey";
    container.appendChild(paraOne);

    const paraTwo = document.createElement("p");
    paraTwo.textContent = "Location: Beach City";
    container.appendChild(paraTwo);
}