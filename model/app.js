let button = document.querySelector(".btn");
let modal = document.querySelector(".modal-overlay");
let button2 = document.querySelector(".btn2");

button.addEventListener("click", function() {
    modal.classList.add("open-modal");
});

button2.addEventListener("click", function() {
    modal.classList.remove("open-modal");
});
