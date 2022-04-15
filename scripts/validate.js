;
// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// enableValidation({
//   formSelector: '.popup__form', //класс формы
//   inputSelector: '.popup__input', //класс инпута
//   submitButtonSelector: '.popup__button', //класс кнопки
//   inactiveButtonClass: 'popup__button_disabled', //класс кнопки которым делаю кнопку неактивной
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });

//вывожу ошибку в спан
const valideteInput = (input) => {
  //выбираю нужный спан
  const errorElement = input.parentNode.querySelector(`#${input.name}-error`);
  //достаю значение ощибки из Validation API
  errorElement.textContent = input.validationMessage
}

//кнопк активна
const enableButton = (button, inactiveButtonClass) => {
  button.disabled = false;
  button.classList.remove(inactiveButtonClass);
}
//кнопка не активна
const disableButton = (button, inactiveButtonClass) => {
  button.disabled = true;
  button.classList.add(inactiveButtonClass);
}
//здесь установим состояние кнопки save-button
//в зависимости от наличия ошибок в полях ввода
const setButtonState = (button, isValid) => {
  if (isValid) {
    enableButton(button, "popup__save-button_invalid");//убрать 'popup__save-button_invalid' в константу
  } else {
    disableButton(button, "popup__save-button_invalid");//убрать 'popup__save-button_invalid' в константу
  };
};

//проверка инпута в момент ввода данных
const handleInput = (event) => {
  const currentForm = event.currentTarget;
  const input = event.target;
  const submitButton = currentForm.querySelector('.popup__save-button');
  //проверка инпута
  valideteInput(input);
  //ативность кнопки
  setButtonState(submitButton, currentForm.checkValidity());
}



formSaveName.addEventListener("input", handleInput);
formSavePic.addEventListener("input", handleInput);
