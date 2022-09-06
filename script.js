let jsonDiv = $(".json-line");
let loadDiv = $(".loader");
let container = $(".container"); //the whole page
let jsonURL = "./datastore.json"; //JSON file path
let btn = $(".js-button");
let sectionName = $(".section-name h2")
let item = $(".item")
let item1Img = $(".item1 img")


// Start Page with loader
document.addEventListener('DOMContentLoaded', function() {  setTimeout(() => {
    loadDiv.css("display", "none");
    container.css("display", "block");
}, 1700)}, false);


// JSON Tests
// let parsedContent = JSON.parse(content);
// console.log(parsedContent.cookies[0].name);

// btn.click(() => {
//     getData();
//     // jsonDiv.html= obj;
// })

// function getData(){
//     fetch(jsonURL)
//     .then(response => response.json())
//     .then(data => {outputData (data)
//     })
// }

// function outputData(obj){
//     console.log(obj[1].pastries[1].name);

//     let html = '';
//     obj.forEach(() => {
//         // console.log(obj[1].pastries[1].name);

//         html+= `<div class="item1"><img src=${obj[1].pastries[1].name} alt="">
//         <h4 class="product-name">Cookie Crumble</h4>
//         <h3 class="product-price">$1000.50</h3>
//         <button class="add-to-cart-btn">ADD TO CART</button>
//     </div>`
//     });
//     item.html(html);
//     ind++;
// }

// cakeBtn.click(()=>{
//     sectionName.html("CAKES");
//     console.log("cakes clicked");
//     getData();
// })



