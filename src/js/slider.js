const sItems = document.querySelectorAll('.services-info__item');
const sSlides = document.querySelectorAll('.services-info__slide');
const sText = document.querySelectorAll('.services-info__text-item');
let sCurrent = 0;

sItems.forEach((item, index) => {
  item.addEventListener('click', e => {
    e.preventDefault();

    sItems[sCurrent].classList.remove('item-active');
    sItems[index].classList.add('item-active');
    sText[sCurrent].classList.remove('text-active');
    sText[index].classList.add('text-active');

    sSlides[sCurrent].style.zIndex = '1';
    sSlides[index].style.zIndex = '2';
    if (sCurrent < index) {
      sSlides[index].animate(
        [{ transform: 'translateX(-100%)' }, { transform: 'translateX(0)' }],
        {
          duration: 400,
        },
      );
    }
    if (sCurrent > index) {
      sSlides[index].animate(
        [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }],
        {
          duration: 400,
        },
      );
    }
    setTimeout(() => {
      sSlides[sCurrent].classList.remove('slide-active');
      sSlides[index].classList.add('slide-active');
      sSlides[sCurrent].style.zIndex = '0';
      sCurrent = index;
    }, 500);
  });
});
