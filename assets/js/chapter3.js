const swiper = new Swiper('.swiper', {
    // Optional parameters

    // loop: true,
    // slidesPerView: 3,
    // spaceBetween: 20,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    breakpoints: {
      // when window width is >= 320px
      350: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      650: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      1100: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
const animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll () {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            // позиция объекта относительно верха страницы, насколько элемент ниже верха страницы
            const animItemOffset = offset(animItem).top;
            // коэффицент момента старта анимации
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight/animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight/animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('__active');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('__active');
                }
                
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll ()
    }, 300)
    
}
const menuTrigger = document.querySelector('.menu--v2__btn'),
    menuList = document.querySelector('.menu--v2__wrap'),
    menuClose = document.querySelector('.menu--v2__item--close');

if (menuTrigger) {
    menuTrigger.addEventListener('click', () => {
        menuTrigger.classList.add('__active');
        menuList.classList.add('__active');
    })
}
if (menuClose) {
    menuClose.addEventListener('click', () => {
    menuTrigger.classList.remove('__active');
    menuList.classList.remove('__active');
})
}