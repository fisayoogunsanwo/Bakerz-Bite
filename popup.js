const openModal = $(".add-to-cart-btn");
const closeModal = $(".close-modal");
const modal = $(".outside-modal");

openModal.on('click', () =>{
    // openModal.classList("transi")
    modal.addClass("modal-display");
    modal.show();
})
closeModal.on('click', () =>{
    // openModal.classList("transi");
    modal.hide();
})