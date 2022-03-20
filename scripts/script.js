const popupElement = document.querySelector(".popup");
const profileEdit = document.querySelector(".profile__button_edit");
const profileEditClose = document.querySelector(".popup__close-button");
const ptofileEditSave = document.querySelector(".popup__save-button");

const ESC_KEY = "Escape";

let profileName = document.querySelector(".profile__name");
let profileWork = document.querySelector(".profile__work");
let popupName = document.querySelector(".popup__input_name");
let popupWork = document.querySelector(".popup__input_work");

function openPopup() {
  popupElement.classList.toggle("hidden");
  document.addEventListener("keyup", onDocumentKeyUp);
  popupName.value = profileName.innerHTML;
  popupWork.value = profileWork.innerHTML;
}
function closePopup() {
  popupElement.classList.toggle("hidden");
  document.removeEventListener("keyup", onDocumentKeyUp);
}

function closeAndSave() {
  profileName.textContent = popupName.value;
  profileWork.textContent = popupWork.value;
  closePopup();
}

function onDocumentKeyUp(event) {
  if (event.key === ESC_KEY) {
    closePopup();
  }
}

profileEdit.addEventListener("click", openPopup);
profileEditClose.addEventListener("click", closePopup);
ptofileEditSave.addEventListener("click", closeAndSave);
