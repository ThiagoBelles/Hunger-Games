const modal = document.getElementById("modal")     // <- Seleciona o Modal (fundo escuro)
let modalContent = document.getElementById('modal-content');  // <- Seleciona o Modal Content (imagens)


function openModal(img){                              // Função de abrir o Modal 
    if(window.innerWidth < 430)  {return};
    modal.style.visibility = 'visible'
    modalContent.src = img
}

function hideModal(){                              // Função de esconder o Modal
    modal.style.visibility = 'hidden'
}

