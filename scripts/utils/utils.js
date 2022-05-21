import {pictureImg, pictureText, popupBigPicture} from './constants.js';
import {handleOpenPopup} from '../pages/index.js';
//функция просмотра фото в полный размер
export function handlePopupImage(picName, picUrl) {
  pictureImg.src = picUrl;
  pictureImg.alt = picName;
  pictureText.textContent = picName;
  handleOpenPopup(popupBigPicture);
}
