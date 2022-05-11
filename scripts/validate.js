class FormValidator {
  constructor(settings) {
    this._settings = settings;
  }
_showInputError = (inputElement, errorMessage, formElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  };
_hideInputError = (inputElement, formElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = '';
  };

_checkInputValidity = (inputElement, formElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage, formElement);
    } else {
      this._hideInputError(inputElement, formElement);
    }
  };

_setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(this._settings.inputSelector)); //селектор инпута
    const buttonElement = formElement.querySelector(this._settings.submitButtonSelector); //селектор кнопки
    this._toggleButtonState(buttonElement, inputList); // состояние кнопки в самом начале
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        this._toggleButtonState(buttonElement, inputList);  // состояние кнопки при изменении любого из полей
        this._checkInputValidity(inputElement, formElement);  // состояние ошибки инпута при изменении любого из полей
      }.bind(this));
    });
  };

_hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

_toggleButtonState = (buttonElement, inputList) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._settings.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };

enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(this._settings.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
    this._setEventListeners(formElement);
    });
  };

}

