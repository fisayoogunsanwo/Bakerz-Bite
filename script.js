let loadDiv = $(".loader");
let container = $(".container");

// let logo = $(".logo");


// Start Page with loader

window.onload(
setTimeout(() => {
    loadDiv.css("display", "none");
    container.css("display", "block");
}, 1700)
)