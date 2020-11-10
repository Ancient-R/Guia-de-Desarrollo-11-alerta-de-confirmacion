// primer modal
const modalOpen = document.getElementById('btn-open-modal');
const modalBackground = document.getElementById('modal-background');
const modalClose = document.getElementById('btn-close-modal');

// modal de éxito
const modalConfirm = document.getElementById('btn-confirm-modal');
const modalSuccess = document.getElementById('modal-background-success');

// funciones
const hideModal = param => {
    modalBackground.classList.remove('show--modal');
    if( param ){
        modalSuccess.classList.remove('show--modal');
    }
}

const showModal = param => {
    modalBackground.classList.add('show--modal')
    if( param ){
        modalSuccess.classList.add('show--modal');
    }
}


// Eventos

    // modal de confirmación
modalOpen.addEventListener('click', () =>  showModal(false) );
modalClose.addEventListener('click', () => hideModal(false));

    //  Modal de éxito
modalConfirm.addEventListener('click', () => {
    showModal(true)
    hideModal(false);
});
modalSuccess.addEventListener('click', () => hideModal(true));