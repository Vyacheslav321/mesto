import {pictureImg, pictureText, popupBigPicture} from './constants.js';
import Popup from '../components/Popup.js';
// import {handleOpenPopup} from '../pages/index.js';
//функция просмотра фото в полный размер
export function handleCardClick(picName, picUrl) {
  pictureImg.src = picUrl;
  pictureImg.alt = picName;
  pictureText.textContent = picName;
  new Popup(popupBigPicture).open();
}
