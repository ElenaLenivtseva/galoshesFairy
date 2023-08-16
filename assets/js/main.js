let text = '* По мотивам сказки Ганса Христиана Андерсена «Калоши счастья»'
let content = document.querySelector('#content')

for (let i in [...text]) {
  let letter = document.createElement('span')
  letter.classList.add('header__span')
  letter.textContent = [...text][i]
  if(letter.textContent.match(/\s/)) {
    letter.style.margin = 'auto 3px'
  }
  letter.style.animationDelay = i/30+'s'
  content.appendChild(letter)
}

console.log ('work');
let currentDroppable = null;
    ball.onmousedown = function(event) {

      let shiftX = event.clientX - ball.getBoundingClientRect().left;
      let shiftY = event.clientY - ball.getBoundingClientRect().top;

      ball.style.position = 'absolute';
      ball.style.zIndex = 1000;
      document.body.append(ball);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        ball.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ball.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null если мы были не над droppable до этого события
            // (например, над пустым пространством)
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
            // (например, только что покинули droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
      };

    };

    function enterDroppable(elem) {
      elem.style.background = '#053404';
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

    ball.ondragstart = function() {
      return false;
    };
const quotes = ['<img src="/assets/img/quotes.png" alt="" class="map__img-out"><p class="text map__title">— Боже мой! Или это мираж, фата-моргана, или я... господи... пьян? – застонал советник юстиции. – Что же это такое? Что же это такое?</p>', 
'<img src="/assets/img/quotes.png" alt="" class="map__img-out"><p class="text map__title">— Нет у него ни жены, ни детей, ни тревог, ни забот; каждый вечер по гостям разъезжает. Хорошо бы мне поменяться с ним местами: я тогда стал бы самым счастливым человеком на земле!</p>', 
'<img src="/assets/img/quotes.png" alt="" class="map__img-out"><p class="text map__title">— Взять бы, скажем, зрителей первого ряда, – думал медик, – И посмотреть, что делается у них в сердце, – должен же туда вести какой-то вход, вроде как в магазин.</p>', 
'<img src="/assets/img/quotes.png" alt="" class="map__img-out"><p class="text map__title">— Эх, вот вы опять уезжаете, а мы остаемся, – сказал писарь. – Счастливые люди, летаете себе, где хотите и куда хотите, а у нас цепи на ногах. </p>', '<img src="/assets/img/quotes.png" alt="" class="map__img-out"><p class="text map__title">— О, путешествовать! - вырвалось у него, - Что может быть лучше! Это предел всех моих мечтаний.</p>'];

const phrases = [`<p class="number map__number">I.</p>
<p class="text map__title">Счастье </br>— в прошлом.</p>`, `<p class="number map__number">II.</p>
<p class="text map__title">Счастье </br>— в беззаботности.</p>`, `<p class="number map__number">III.</p>
<p class="text map__title">Счастье </br>— видеть людей насквозь.</p>`, `<p class="number map__number">IV.</p>
<p class="text map__title">Счастье </br>— лететь, куда хочешь.</p>`, `<p class="number map__number">V.</p>
<p class="text map__title">Счастье </br>— странствовать по миру.</p>`]

const windowWidth = window.innerWidth;

let items = document.querySelectorAll('.map__item');
if (windowWidth>=1000 && items.length > 0) {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('mouseenter', (e) => {
            items[i].innerHTML = quotes[i];
        });
        items[i].addEventListener('mouseleave', (e) => {
            items[i].innerHTML = phrases[i];
        });
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
