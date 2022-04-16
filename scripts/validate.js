;
// включение валидации вызовом enableValidation
// все настройки передаются при вызове
// const formSelector = '.popup__form'; //++класс формы
const inputSelector = '.popup__input'; //класс инпута
// const submitButtonSelector = '.popup__save-button'; //+++класс кнопки
// const inactiveButtonClass = 'popup__save-button_invalid'; //+++класс кнопки которым делаю кнопку неактивной
const inputErrorClass = 'popup__input_type_error'; //
// const errorClass = 'popup__error'; //


const enableValidation = (formSelector, submitButtonSelector, inactiveButtonClass, errorClass) => {

//вывожу ошибку в спан
const valideteInput = (input, isValid) => {
  //выбираю нужный спан
  const errorElement = input.parentNode.querySelector(`#${input.name}-error`);
  //достаю значение ощибки из Validation API
  errorElement.textContent = input.validationMessage;
  //если есть ошибка, вывожу подчеркивание
  if (!isValid) {
    console.log(input);
    input.classList.add(errorClass);
  } else {
    console.log(input);
    input.classList.remove(errorClass);
  };
}

//кнопка активна
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
    enableButton(button, inactiveButtonClass);//убрал 'popup__save-button_invalid' в константу
  } else {
    disableButton(button, inactiveButtonClass);//убрал 'popup__save-button_invalid' в константу
  };
};

//проверка инпута в момент ввода данных
const handleInput = (event) => {
  const currentForm = event.currentTarget;
  const input = event.target;
  console.log(event.target)
  const submitButton = currentForm.querySelector(submitButtonSelector); //убрал '.popup__save-button' в переменную
  //проверка инпута
  valideteInput(input, currentForm.checkValidity());
  //ативность кнопки
  setButtonState(submitButton, currentForm.checkValidity());

}



formSaveName.addEventListener("input", handleInput);
formSavePic.addEventListener("input", handleInput);
};

