const popupElement = document.querySelectorAll(".popup");
const popupElementEdit = popupElement[0];
const popupElementPic = popupElement[1];
const profileEdit = document.querySelector(".profile__button-edit");
const photoAdd = document.querySelector(".profile__button-add");
const profileEditClose = document.querySelectorAll(".popup__close-button");
const closeEdit = profileEditClose[0];
const closePic = profileEditClose[1];
const profileEditSave = document.querySelectorAll(".popup__save-button");
const editSave1 = profileEditSave[0];
const editSave2 = profileEditSave[1];
const profileForm = document.querySelectorAll(".popup__form");
const addLike = document.querySelectorAll('.element__like');
console.log(addLike.length);


let profileName = document.querySelector(".profile__name");
let profileWork = document.querySelector(".profile__work");
let popupName = document.querySelector(".popup__input_type_name");
let popupWork = document.querySelector(".popup__input_type_work");

let popupPicName = document.querySelector(".popup__input_type_picname");
let popupPicUrl = document.querySelector(".popup__input_type_picurl");


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


//popup name
function openPopup() {
  popupName.value = profileName.innerHTML;
  popupWork.value = profileWork.innerHTML;
  popupElementEdit.classList.add("popup_opened");
}
function closePopup() {
  popupElementEdit.classList.remove("popup_opened");
}

function closeAndSave() {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileWork.textContent = popupWork.value;
  closePopup();
}

profileEdit.addEventListener("click", openPopup);
closeEdit.addEventListener("click", closePopup);
profileForm[0].addEventListener("submit", closeAndSave);

//popup pic
function openPopupPic() {
  popupElementPic.classList.add("popup_opened");
}

function closePopupPic() {
  popupElementPic.classList.remove("popup_opened");
}

function closeAndSavePic() {
  event.preventDefault();
  closePopupPic();
}

photoAdd.addEventListener('click', openPopupPic);
closePic.addEventListener("click", closePopupPic);
profileForm[1].addEventListener("submit", closeAndSavePic);

// Like

for (let i of addLike) {
  i.addEventListener("click", () => {i.classList.toggle("element__like_active")});
}






