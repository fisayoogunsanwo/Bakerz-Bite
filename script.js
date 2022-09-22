// For Page Loader
let loadDiv = $(".loader");
let container = $(".container"); //the whole page

// For Pop Up
const addToCartBtn = $(".add-to-cart-btn");
const closeModal = $(".close-modal");
const modal = $(".outside-modal");
let viewItem = $(".item");

// For Product info retrieval from JSON
let productName = $(".product-name")
let productIngredients = $(".product-ingredients")
let productPrice = $(".product-price")
let productImage = $(".item-data img")

let itemData = $(".item-data")
let productsLoader = $(".products-loader")
let section = $(".section")
let sectionHeader = $(".section-name h2")

let cakeActive = $("#cake-section")
let pastriesActive = $("#pastries-section")
let cookiesActive = $("#cookies-section")
let beveragesActive = $("#beverages-section")
let merchActive = $("#merch-section")
let piesActive = $("#pies-section")
let offersActive = $("#offers-section")


// Start Page with loader
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        loadDiv.css("display", "none");
        container.css("display", "block");
    }, 1700)
}, false);

// JSON objects data link
// Section checker function
section.click(function sectionCheck(){
    let ind = $(this).data("myindex");
    let jsonSectionName = "";
    console.log(ind);
    console.log("current button id : " + $(this).attr("id"))

    // Product  page loading animation at the top
        productsLoader.css("display", "block");
        setTimeout(() => {
            productsLoader.css("display", "none");
        }, 5000);

         // JSON loading
    // let ind = $(this).data("myindex");
    $.getJSON("data.json",function (data){

    if(ind == 0){
        section.removeClass("selected")
        jsonSectionName = "CAKES";
        for (let n = 0; n < itemData.length; n++) {
            const element = itemData[n];
            cakeActive.addClass("selected");
            sectionHeader.html(jsonSectionName);
            productName[n].innerHTML = data.cakes[n].name;
            productPrice[n].innerHTML = data.cakes[n].price;
            productImage[n].setAttribute("src", data.cakes[n].imageSRC);
        }
    }
    else if(ind == 1){
        section.removeClass("selected")
        jsonSectionName = "PASTRIES";
        for (let n = 0; n < itemData.length; n++) {
            const element = itemData[n];
            pastriesActive.addClass("selected");
            sectionHeader.html(jsonSectionName);
            productName[n].innerHTML = data.pastries[n].name;
            productPrice[n].innerHTML = data.pastries[n].price;
            productImage[n].setAttribute("src", data.pastries[n].imageSRC);
        }
    }
    else if(ind == 2){
        section.removeClass("selected")
        jsonSectionName = "COOKIES";
        for (let n = 0; n < itemData.length; n++) {
            const element = itemData[n];
            cookiesActive.addClass("selected");
            sectionHeader.html(jsonSectionName);
            productName[n].innerHTML = data.cookies[n].name;
            productPrice[n].innerHTML = data.cookies[n].price;
            productImage[n].setAttribute("src", data.cookies[n].imageSRC);
        }
    }
    else if(ind == 3){ 
        section.removeClass("selected")
        jsonSectionName = "PIES";
        for (let n = 0; n < itemData.length; n++) {
            const element = itemData[n];
            piesActive.addClass("selected");
            sectionHeader.html(jsonSectionName);
            productName[n].innerHTML = data.pies[n].name;
            productPrice[n].innerHTML = data.pies[n].price;
            productImage[n].setAttribute("src", data.pies[n].imageSRC);
        }
    }
    else if(ind == 4){
        section.removeClass("selected")
        jsonSectionName = "BEVERAGES";
        for (let n = 0; n < itemData.length; n++) {
            const element = itemData[n];
            beveragesActive.addClass("selected");
            sectionHeader.html(jsonSectionName);
            productName[n].innerHTML = data.beverages[n].name;
            productPrice[n].innerHTML = data.beverages[n].price;
            productImage[n].setAttribute("src", data.beverages[n].imageSRC);
        }
    }
    else if(ind == 5){ 
        section.removeClass("selected")
        jsonSectionName = "MERCH";
        for (let n = 0; n < itemData.length; n++) {
            const element = itemData[n];
            merchActive.addClass("selected");
            sectionHeader.html(jsonSectionName);
            productName[n].innerHTML = data.merch[n].name;
            productPrice[n].innerHTML = data.merch[n].price;
            productImage[n].setAttribute("src", data.merch[n].imageSRC);
        }
    }
    else if(ind == 6){ 
        section.removeClass("selected")
        jsonSectionName = "OFFERS";
        for (let n = 0; n < itemData.length; n++) {
            const element = itemData[n];
            offersActive.addClass("selected");
            sectionHeader.html(jsonSectionName);
            productName[n].innerHTML = data.offers[n].name;
            productPrice[n].innerHTML = data.offers[n].price;
            productImage[n].setAttribute("src", data.offers[n].imageSRC);
        }
    }
    })
})

// Pop Up
viewItem.on('click', () =>{
    modal.addClass("modal-display");
    modal.show();
})

addToCartBtn.on('click', () =>{
    modal.addClass("modal-display");
    modal.show();
})

closeModal.on('click', () =>{
    modal.hide();
})
