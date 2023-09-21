// Função para mostrar o popup
function mostrarPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

// Função para fechar o popup
function fecharPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Adicionar evento de clique ao botão "Mostrar Popup"
var showPopupButton = document.getElementById('showPopup');
showPopupButton.addEventListener('click', mostrarPopup);

// Adicionar evento de clique ao botão de fechar o popup
var closePopupButton = document.getElementById('closePopup');
closePopupButton.addEventListener('click', fecharPopup);
