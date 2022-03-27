const popupElement = document.querySelector(".popup");
const profileEdit = document.querySelector(".profile__button-edit");
const profileEditClose = document.querySelector(".popup__close-button");
const profileEditSave = document.querySelector(".popup__save-button");
const profileForm = document.querySelector(".popup__form");

let profileName = document.querySelector(".profile__name");
let profileWork = document.querySelector(".profile__work");
let popupName = document.querySelector(".popup__input_type_name");
let popupWork = document.querySelector(".popup__input_type_work");

function openPopup() {
  popupName.value = profileName.innerHTML;
  popupWork.value = profileWork.innerHTML;
  popupElement.classList.toggle("popup_opened");
}
function closePopup() {
  popupElement.classList.toggle("popup_opened");
}

function closeAndSave() {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileWork.textContent = popupWork.value;
  closePopup();
}

profileEdit.addEventListener("click", openPopup);
profileEditClose.addEventListener("click", closePopup);
profileForm.addEventListener("submit", closeAndSave);
