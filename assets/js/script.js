"use strict"

let ul = document.querySelector("ul")


document.querySelector(".add").addEventListener("click", function () {
    let input = document.querySelector(".input-text");
    let text = input.value;

    if (text.trim() == "") {
        document.querySelector(".validation").classList.remove("d-none");
        return;
    } else {
        document.querySelector(".validation").classList.add("d-none");
    }

    if (text == "i") {
        document.querySelector(".error").classList.remove("d-none");
        return;
    } else {
        document.querySelector(".error").classList.add("d-none");
    }

    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = text;
    ul.append(li);
    input.value = "";
})
