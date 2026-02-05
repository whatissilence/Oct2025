const SLIDER_WIDTH = 900;
const PLAY_TIMOUT_SEC = 3;
const SWIPE_THRESHOLD = 80;

const imageList = [
  'img/dragon_fly_jaws_69221_1920x1080.jpg',
  'img/girl_hat_bw_132197_1920x1080.jpg',
  'img/light_beam_1326875_1920x1080.jpg',
  'img/treble_clef_musical_notes_multicolored_121263_1920x1080.jpg',
]


const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.slider-nav.slider-left');
const rightArrow = document.querySelector('.slider-nav.slider-right');
const sliderLine = document.querySelector('.slider-line');
const dotsContainer = document.querySelector('.slider-dots');


let currentSlide = 0;
let intervalTimer;
let dots = [];

let startX = 0;
let currentTranslate = 0;
let isSwiping = false;

init();


// ================= initialization ======================
function init() {
  createImages();
  createDots();
  setActiveDot(0);

  initEvents();
}

function initEvents() {
  leftArrow.addEventListener('click', leftClickHandler);
  rightArrow.addEventListener('click', rightClickHandler);

  document.body.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
      leftClickHandler()
    } else if (event.key === 'ArrowRight') {
      rightClickHandler()
    }
  })

  // intervalTimer = setInterval(rightClickHandler, PLAY_TIMOUT_SEC * 1000); // я виключив миготиння со старту
  document.getElementById('playButton').addEventListener('click', playHandler)
  document.getElementById('pauseButton').addEventListener('click', pauseHandler)

  // passive true тут означає, що воно буде працювати плавніше, але не можна робити превент дефолт і не блокує скрол
  sliderLine.addEventListener('touchstart', touchStartHandler, { passive: true });
  sliderLine.addEventListener('touchmove', touchMoveHandler, { passive: true });
  sliderLine.addEventListener('touchend', touchEndHandler);
}

// ================= create elements functions ======================
function createImages() {
  let generatedHtml = '';
  imageList.forEach(imgStr => {
    generatedHtml = generatedHtml + `<img src="${imgStr}" alt="${imgStr}">`
  })

  generatedHtml = generatedHtml + `<img src="${imageList[0]}" alt="${imageList[0]}">`
  sliderLine.innerHTML = generatedHtml;
}

function createDots() {
  dotsContainer.innerHTML = '';
  dots = [];

  imageList.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'slider-dot';
    dot.addEventListener('click', () => { // УВАГА. Тут handler шоб покласти index в замикання
      currentSlide = index;
      moveToSlide(currentSlide);
      setActiveDot(index);
    });
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });
}

// ================= handlers ======================
function leftClickHandler() {
  currentSlide = currentSlide - 1;
  if (currentSlide < 0) {
    currentSlide = imageList.length;
    silentlyMoveToSlide(currentSlide);
    currentSlide = imageList.length - 1;
  }

  moveToSlide(currentSlide);
}

function rightClickHandler() {
  currentSlide = currentSlide + 1;
  if (currentSlide >= imageList.length) {
    moveToSlide(currentSlide);

    setTimeout(() => {
      currentSlide = 0;
      silentlyMoveToSlide(currentSlide)
    }, 500); // тишком переходимо після анімації, вона у нас в css 0.5 sec
  }

  moveToSlide(currentSlide);
}

function pauseHandler() {
  if (intervalTimer) {
    clearInterval(intervalTimer);
    intervalTimer = null;
  }
}

function playHandler() {
  if (!intervalTimer) {
    intervalTimer = setInterval(rightClickHandler, PLAY_TIMOUT_SEC * 1000);
  }
}

function touchStartHandler(e) {
  startX = e.touches[0].clientX;
  isSwiping = true;
  pauseHandler(); // стопаємо аутоплей

  sliderLine.classList.remove('slow-switch');
  currentTranslate = -currentSlide * SLIDER_WIDTH;
}

function touchMoveHandler(e) {
  if (!isSwiping) {
    return;
  }

  const currentX = e.touches[0].clientX;
  const diff = currentX - startX;

  sliderLine.style.transform =
    `translateX(${currentTranslate + diff}px)`;
}

function touchEndHandler(e) {
  if (!isSwiping) {
    return;
  }

  isSwiping = false;
  sliderLine.classList.add('slow-switch');

  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (Math.abs(diff) > SWIPE_THRESHOLD) { // перевіряємо по модулю, щоб не плутати з кліком
    if (diff < 0) {
      rightClickHandler();
    } else {
      leftClickHandler();
    }
  } else {
    moveToSlide(currentSlide);
  }
}

// ================= action functions ======================

function moveToSlide(slide) {
  sliderLine.style.transform = `translate(${slide * -SLIDER_WIDTH}px)`;
  setActiveDot(slide % imageList.length);
}

function silentlyMoveToSlide(slide) {
  sliderLine.classList.remove('slow-switch');
  sliderLine.style.transform = `translate(${slide * -SLIDER_WIDTH}px)`;
  sliderLine.offsetHeight; // примінити клас, який ми видалили, перерахувати ДОМ
  sliderLine.classList.add('slow-switch');
}


function setActiveDot(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}