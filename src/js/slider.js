function updateSize() {
  let width = document.documentElement.clientWidth;
  // for desktop
  if (width > 768) {
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
            [
              { transform: 'translateX(-100%)' },
              { transform: 'translateX(0)' },
            ],
            {
              duration: 400,
            }
          );
        }
        if (sCurrent > index) {
          sSlides[index].animate(
            [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }],
            {
              duration: 400,
            }
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

    // for mobile
  } else {
    const prev = document.getElementById('prev-slide');
    const next = document.getElementById('next-slide');
    const sItems = document.querySelectorAll('.services-info__item');
    const sSlides = document.querySelectorAll('.services-info__slide');
    const sText = document.querySelectorAll('.services-info__text-item');
    let sCurrent = 0;
    let index = 0;
    const total = sItems.length;

    sSlides.forEach((item, index) => {
      sText[
        index
      ].style.background = `linear-gradient(180deg, #18306c 0%, rgba(47, 93, 210, 0) 100%),     url(${item.children[0].src}) no-repeat center / cover`;
    });

    prev.addEventListener('click', () => {
      if (sCurrent > 0) {
        index = sCurrent - 1;
      } else {
        index = total - 1;
      }
      setSlide(sCurrent, index);
      sCurrent = index;
    });
    next.addEventListener('click', () => {
      if (sCurrent < total - 1) {
        index = sCurrent + 1;
      } else {
        index = 0;
      }
      setSlide(sCurrent, index);
      sCurrent = index;
    });
  }
}

function setSlide(sCurrent, index) {
  const sItems = document.querySelectorAll('.services-info__item');
  const sSlides = document.querySelectorAll('.services-info__slide');
  const sText = document.querySelectorAll('.services-info__text-item');

  sItems[sCurrent].classList.remove('item-active');
  sItems[index].classList.add('item-active');
  sText[sCurrent].classList.remove('text-active');
  sText[index].classList.add('text-active');
}

updateSize();
window.addEventListener('resize', updateSize);
