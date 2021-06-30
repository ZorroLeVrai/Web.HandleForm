const openCloseButton = document.getElementById('open-close-button');
const modalForm = document.getElementById('my-form');
const formCloseElement = document.getElementById('form-close-command');
const formOkButton = document.getElementById('form-OK-command');

let formIsHidden = true;

const updateButtonContent = () => {
  openCloseButton.textContent = formIsHidden ? "Open" : "Close";
}

function toggleModal() {
  modalForm.classList.toggle('removed');
  formIsHidden = !formIsHidden;
  updateButtonContent();
};

openCloseButton.addEventListener('click', toggleModal);

formCloseElement.addEventListener('click', toggleModal);

formOkButton.addEventListener('click', toggleModal);