// let dot = document.querySelector('.bird');

const animItem = document.querySelector('.bird');
if (animItem) {
    window.addEventListener('scroll', birdOnScroll)
    function birdOnScroll () {
            const animItemHeight = animItem.offsetHeight;
            // позиция объекта относительно верха страницы, насколько элемент ниже верха страницы
            const animItemOffset = offset(animItem).top;
            // коэффицент момента старта анимации
            const animStart = 1;
            let animItemPoint = window.innerHeight - animItemHeight/animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight/animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.innerHTML = "🦅";
                animItem.classList.add('bird--fly');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('bird--fly');
                }
                
            }
        
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    
}
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

const compareWrap = document.querySelector('.compare-img__wrap');
const messagePopUp = document.querySelector('.compare-img--message');
console.log(messagePopUp.firstChild.nextSibling)
compareWrap.addEventListener('click', (e) => {
    messagePopUp.classList.add('__active');
    if (e.target.classList.contains('compare-img__opt-right')) {
        console.log('right')
        messagePopUp.firstChild.nextSibling.innerText = "Вы угадали! А писарь вот нет...";
    } else if (e.target.classList.contains('compare-img__opt-left')) {
        console.log('left')
        messagePopUp.style.background = "#781104";
        messagePopUp.firstChild.nextSibling.innerText = "Вы не угадали. Как, впрочем, и писарь...";
    }
    compareWrap.style.pointerEvents = "none";
})