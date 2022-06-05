(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},t=(document.querySelector(".elements"),document.querySelectorAll(".popup"),document.querySelector(".popup_type_edit-bio")),n=t.querySelector(".popup__input_type_name"),r=t.querySelector(".popup__input_type_work"),o=t.querySelector(".popup__form"),i=document.querySelector(".profile__name"),u=document.querySelector(".profile__work"),c=document.querySelector(".popup_type_edit-pic"),l=(c.querySelector(".popup__input_type_picname"),c.querySelector(".popup__input_type_picurl"),c.querySelector(".popup__form")),s=document.querySelector(".popup_type_bigpicture"),p=s.querySelector(".popup__picture"),a=s.querySelector(".popup__text"),f=document.querySelector(".profile__button-edit"),_=document.querySelector(".profile__button-add");function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._elements=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._elements.prepend(e)}},{key:"generateCards",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){var n=t.picName,r=t.picURL,o=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._picName=n,this._picUrl=r,this._handleCardClick=o}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector("#card-template").content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._elementPic.addEventListener("click",(function(){e._handleCardClick(e._picName,e._picUrl)})),this._element.querySelector(".element__trash").addEventListener("click",(function(){e._handleDeleteClick()})),this._elementLike.addEventListener("click",(function(){e._handleLikeClick()}))}},{key:"_handleDeleteClick",value:function(){this._element.remove(),this._element=null}},{key:"_handleLikeClick",value:function(){this._elementLike.classList.toggle("element__like_active")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementPic=this._element.querySelector(".element__pic"),this._elementLike=this._element.querySelector(".element__like"),this._setEventListeners(),this._elementPic.src=this._picUrl,this._elementPic.alt=this._picName,this._element.querySelector(".element__text").textContent=this._picName,this._element}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n,r){var o=r.popupName,i=r.popupWork;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=t,this._profileWork=n,this._popupName=o,this._popupWork=i}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){this._popupName.value=this._profileName.textContent,this._popupWork.value=this._profileWork.textContent}},{key:"setUserInfo",value:function(){this._profileName.textContent=this._popupName,this._profileWork.textContent=this._popupWork}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.popupElement.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this.popupElement.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this.popupElement.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function C(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var q=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(c,t);var n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(o);if(i){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function c(t,n){var r,o=t.renderer;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(r=u.call(this,n))._renderer=o,r._popupElement=document.querySelector(n),r._currentForm=r._popupElement.querySelector(e.formSelector),r._inputList=r._popupElement.querySelectorAll(e.inputSelector),r._submitButton=r._popupElement.querySelector(e.submitButtonSelector),r._getInputValues=r._getInputValues.bind(j(r)),r}return n=c,(r=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;S(P(c.prototype),"setEventListeners",this).call(this),this._currentForm.addEventListener("submit",(function(t){t.preventDefault(),e._renderer(e._getInputValues())}))}},{key:"close",value:function(){S(P(c.prototype),"close",this).call(this),this._currentForm.reset()}}])&&w(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),c}(k);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),R(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(r._settings.inputErrorClass),n.textContent=t,n.classList.add(r._settings.errorClass)})),R(this,"_hideInputError",(function(e){var t=r._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(r._settings.inputErrorClass),t.classList.remove(r._settings.errorClass),t.textContent=""})),R(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),R(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",function(){this._toggleButtonState(),this._checkInputValidity(e)}.bind(r))}))})),R(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),R(this,"disableSubmitButton",(function(){r._buttonElement.classList.add(r._settings.inactiveButtonClass),r._buttonElement.disabled=!0})),R(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.disableSubmitButton():(r._buttonElement.classList.remove(r._settings.inactiveButtonClass),r._buttonElement.disabled=!1)})),R(this,"enableValidation",(function(){r._formElement.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners()})),this._settings=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._formElement.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValidator",value:function(){var e=this;this._toggleButtonState(this._inputList,this._buttonElement),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function W(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var A=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return W(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._pictureImg=p,t._pictureText=a,t}return t=u,(n=[{key:"open",value:function(e,t){T(D(u.prototype),"open",this).call(this),this._pictureImg.src=t,this._pictureImg.alt=e,this._pictureText.textContent=e}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(k))(".popup_type_bigpicture"),F=function(e){var t=e.picName,n=e.picURL,r=new m({picName:t,picURL:n,handleCardClick:function(e,t){A.open(e,t),A.setEventListeners()}});return r.generateCard()},z=new d({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=F({picName:e.name,picURL:e.link});z.addItem(t)}},".elements");z.generateCards();var M=new q({renderer:function(e){!function(e){var t=e.popupName,n=e.popupWork;new b(i,u,{popupName:t,popupWork:n}).setUserInfo(),M.close(),H.resetValidator()}(e)}},".popup_type_edit-bio"),G=new q({renderer:function(e){!function(e){var t=e.picName,n=e.picURL,r=F({picName:t,picURL:n});z.addItem(r),G.close(),J.resetValidator()}(e)}},".popup_type_edit-pic"),H=new x(e,o);H.enableValidation();var J=new x(e,l);J.enableValidation(),f.addEventListener("click",(function(){new b(i,u,{popupName:n,popupWork:r}).getUserInfo(),M.open()})),_.addEventListener("click",(function(){G.open()})),M.setEventListeners(),G.setEventListeners()})();