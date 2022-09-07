const openModal = $(".add-to-cart-btn");
const closeModal = $(".close-modal");
const modal = $(".outside-modal");

openModal.on('click', () =>{
    modal.addClass("modal-display");
    modal.show();
})
closeModal.on('click', () =>{
    modal.hide();
})