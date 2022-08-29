const openModal = document.querySelector(".add-to-cart-btn");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");

openModal.addEventListener('click', () =>{
    // openModal.classList("transi");
    modal.showModal();
})
closeModal.addEventListener('click', () =>{
    // openModal.classList("transi");
    modal.close();
})