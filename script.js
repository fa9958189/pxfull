document.addEventListener('DOMContentLoaded', function () {
    const modalButtons = document.querySelectorAll('.modal-button');
    modalButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetModalId = button.getAttribute('data-modal-target');
            const targetModal = document.getElementById(targetModalId);
            if (targetModal) {
                targetModal.style.display = 'block';
            }
        });
    });

    const modalCloseButtons = document.querySelectorAll('.modal-close-button');
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetModalId = button.getAttribute('data-modal-close');
            const targetModal = document.getElementById(targetModalId);
            if (targetModal) {
                targetModal.style.display = 'none';
            }
        });
    });
});
