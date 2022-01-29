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


const profileEditBtn = document.querySelector('.profile__edit-btn');

// Profile popup
const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formInputName = popup.querySelector('.form__input[name="name"]');
const formInputProfession = popup.querySelector('.form__input[name="profession"]');
const form =  popup.querySelector('.form');


const placesCards =  document.querySelector('.places__cards');

// Image popup
const profileAddBtn = document.querySelector('.profile__add-btn');
const imagePopup = document.querySelector('.image-popup');
const imagePopupCloseBtn =  imagePopup.querySelector('.popup__close');
const formInputImage =  imagePopup.querySelector('.form__input[name="image"]');
const formInputTitle =  imagePopup.querySelector('.form__input[name="title"]');
const imageForm = imagePopup.querySelector('.form');
const showImagePopup = document.querySelector('.show-image-popup');
const showImagePopupCloseBtn  = document.querySelector('.show-image-popup__close');





function togglePopup() {
    popup.classList.toggle("popup_opened");
    fillPopupForm();
}

function fillPopupForm(){
    formInputName.value = profileTitle.textContent;
    formInputProfession.value = profileSubtitle.textContent;
}
function updateProfile(evt){
    evt.preventDefault();
    profileTitle.textContent = formInputName.value;
    profileSubtitle.textContent = formInputProfession.value;
    togglePopup();

}

/*
Функция для добавления карточки
*/
const cardTemplate = document.querySelector('.card-template').content;

// можно заменить на forEach
for (let i = 0; i < initialCards.length; i++) {
   createCard(initialCards[i].link, initialCards[i].name );
}

// Добавить карточку в список карточек в html
function createCard(link, name){
  // создаем копию карточки из шаблона
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  // заполняем карточку
  card.querySelector('.card__image').src = link;
  card.querySelector('.card__image').alt= name;
  card.querySelector('.card__title').textContent= name;
  card.querySelector('.card__like').addEventListener('click', function(event){
    event.target.classList.toggle('card__like_active');
  });
  card.querySelector('.card__trash').addEventListener('click', function(){
    card.remove();
  });


  card.querySelector('.card__image').addEventListener('click', function(){
     /*
  1. В попап вставить ссылку на картинку
  2. Вставить текст картинки
  */
  showImagePopup.querySelector('.show-image-popup__img').src = link;
  showImagePopup.querySelector('.show-image-popup__title').textContent = name;
    toggleShowImagePopup();
  })
  // вставляем в список карточек
  placesCards.append(card);


}


function toggleShowImagePopup(){
  showImagePopup.classList.toggle("popup_opened");
}

function  toggleImagePopup() {
    imagePopup.classList.toggle("popup_opened");
}

function addImage(evt) {
    evt.preventDefault();
  
    /* берем из полей ввода имя и ссылку */
    const link = formInputImage.value;
    const name = formInputTitle.value;

   /* создаем карточку с данными из полей */

    createCard(link, name)
    toggleImagePopup();

  }




profileEditBtn.addEventListener('click', togglePopup);
popupCloseBtn.addEventListener('click', togglePopup);
form.addEventListener('submit', updateProfile);
profileAddBtn.addEventListener('click', toggleImagePopup)
imagePopupCloseBtn.addEventListener('click', toggleImagePopup)
imageForm.addEventListener('submit', addImage)
showImagePopupCloseBtn.addEventListener('click', toggleShowImagePopup)














/*
1 Получить все кнопки like
2 Добавить обработчик события для всех лайков
3 В обработчике при клике по лайку нам надо будет переключить класс активный или нет

forEach() -> перебрать в цикле все элементы и что-то с ними сделать
map() -> в процессе перебора модефицировать элементы
filter() -> отфильтровать эл-ты по условию
find() -> поиск совпадения эл-та в массива
every() -> проверить, что все элементы подходят под условие
some() -> проверить, что хотя бы один эл-то подходит под условие

*/

// const cardLikeBtns = document.querySelectorAll('.card__like');

// cardLikeBtns.forEach(function (btn){
//   btn.addEventListener('click', function(event){
//     event.target.classList.toggle('card__like_active')
//   })
// });




