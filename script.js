let loadDiv = $(".loader");
let container = $(".container"); //the whole page



// Start Page with loader
document.addEventListener('DOMContentLoaded', function() {  setTimeout(() => {
    loadDiv.css("display", "none");
    container.css("display", "block");
}, 1700)}, false);