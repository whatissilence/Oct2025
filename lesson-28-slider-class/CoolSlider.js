const SLIDER_WIDTH = 900;
const PLAY_TIMEOUT_SEC = 3;
const SWIPE_THRESHOLD = 80;

export class CoolSlider {
  imageList = [];

  currentSlide = 0;
  intervalTimer = null;
  dots = [];

  startX = 0;
  currentTranslate = 0;
  isSwiping = false;

  constructor({ sliderId, imageList }) {
    if(!sliderId) {
      throw new Error('First parameter must be slider id');
    }

    if (!Array.isArray(imageList) || imageList.length === 0) {
      throw new Error('CoolSlider first param must be an array of image links');
    }

    this.slider = document.getElementById(sliderId);
    if(!this.slider) {
      throw new Error('CoolSlider cannot find element with id ' + sliderId);
    }

    this.imageList = imageList;
    this.createHtmlStructure();
    this.getElementsFromPage();

    this.init();
  }

  init() {
    this.createImagesElements();
    this.createDots();
    this.setActiveDot(0);

    this.initEvents();
  }

  initEvents() {
    this.leftArrow.addEventListener('click', this.leftClickHandler.bind(this));
    this.rightArrow.addEventListener('click', this.rightClickHandler.bind(this));

    document.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') {
        this.leftClickHandler()
      } else if (event.key === 'ArrowRight') {
        this.rightClickHandler()
      }
    })

    // intervalTimer = setInterval(rightClickHandler, PLAY_TIMEOUT_SEC * 1000);
    this.playBtn.addEventListener('click', this.playPauseHandler.bind(this))
    this.updatePlayButton();

    // passive true тут означає, що воно буде працювати плавніше, але не можна робити превент дефолт і не блокує скрол
    this.sliderLine.addEventListener('touchstart', this.touchStartHandler.bind(this), { passive: true });
    this.sliderLine.addEventListener('touchmove', this.touchMoveHandler.bind(this), { passive: true });
    this.sliderLine.addEventListener('touchend', this.touchEndHandler.bind(this));
  }

  createHtmlStructure() {
    this.slider.classList.add('slider');
    this.slider.innerHTML = `
    <div class="slider-viewport">
    <div class="slider-line slow-switch"></div>
  </div>

  <div class="slider-nav slider-left">‹</div>
  <div class="slider-nav slider-right">›</div>
  <div class="slider-dots"></div>
  <div class="play-container">
    <button class="play-btn play">
      <span class="icon"></span>
    </button>
  </div>`;
  }

  getElementsFromPage() {
    this.leftArrow = this.slider.querySelector('.slider-nav.slider-left');
    this.rightArrow = this.slider.querySelector('.slider-nav.slider-right');
    this.sliderLine = this.slider.querySelector('.slider-line');
    this.dotsContainer = this.slider.querySelector('.slider-dots');
    this.playBtn = this.slider.querySelector('.play-btn');
  }

  createImagesElements() {
    let generatedHtml = '';
    this.imageList.forEach(imgStr => {
      generatedHtml = generatedHtml + `<img src="${imgStr}" alt="${imgStr}">`;
    })

    generatedHtml = generatedHtml + `<img src="${this.imageList[0]}" alt="${this.imageList[0]}">`;
    this.sliderLine.innerHTML = generatedHtml;
  }

  createDots() {
    this.dotsContainer.innerHTML = '';
    this.dots = [];

    this.imageList.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = 'slider-dot';
      dot.addEventListener('click', () => { // УВАГА. Тут handler шоб покласти index в замикання
        this.currentSlide = index;
        this.moveToSlide(this.currentSlide);
        this.setActiveDot(index);
      });
      this.dotsContainer.appendChild(dot);
      this.dots.push(dot);
    });
  }

  setActiveDot(index) {
    this.dots.forEach(dot => dot.classList.remove('active'));
    this.dots[index].classList.add('active');
  }

  leftClickHandler() {
    this.currentSlide = this.currentSlide - 1;
    if (this.currentSlide < 0) {
      this.currentSlide = this.imageList.length;
      this.silentlyMoveToSlide(this.currentSlide);
      this.currentSlide = this.imageList.length - 1;
    }

    this.moveToSlide(this.currentSlide);
  }

  rightClickHandler() {
    this.currentSlide = this.currentSlide + 1;
    if (this.currentSlide >= this.imageList.length) {
      this.moveToSlide(this.currentSlide);

      setTimeout(() => {
        this.currentSlide = 0;
        this.silentlyMoveToSlide(this.currentSlide)
      }, 500); // тишком переходимо після анімації, вона у нас в css 0.5 sec
    } else {
      this.moveToSlide(this.currentSlide);
    }
  }

  playPauseHandler() {
    if (this.intervalTimer) {
      clearInterval(this.intervalTimer);
      this.intervalTimer = null;
    } else {
      this.intervalTimer = setInterval(this.rightClickHandler.bind(this), PLAY_TIMEOUT_SEC * 1000);
    }

    this.updatePlayButton(this.intervalTimer);
  }

  updatePlayButton() {
    if (!!this.intervalTimer) {
      this.playBtn.classList.add('pause');
      this.playBtn.classList.remove('play');
    } else {
      this.playBtn.classList.add('play');
      this.playBtn.classList.remove('pause');
    }
  }

  moveToSlide(slide) {
    this.sliderLine.style.transform = `translate(${slide * -SLIDER_WIDTH}px)`;
    this.setActiveDot(slide % this.imageList.length);
  }

  silentlyMoveToSlide(slide) {
    this.sliderLine.classList.remove('slow-switch');
    this.sliderLine.style.transform = `translate(${slide * -SLIDER_WIDTH}px)`;
    this.sliderLine.offsetHeight; // примінити клас, який ми видалили, перерахувати ДОМ
    this.sliderLine.classList.add('slow-switch');
  }

  touchStartHandler(event) {
    this.startX = event.touches[0].clientX;
    this.isSwiping = true;
    this.pauseHandler(); // стопаємо аутоплей

    this.sliderLine.classList.remove('slow-switch');
    this.currentTranslate = -this.currentSlide * SLIDER_WIDTH;
  }

  touchMoveHandler(e) {
    if (!this.isSwiping) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const diff = currentX - this.startX;

    this.sliderLine.style.transform =
      `translateX(${this.currentTranslate + diff}px)`;
  }

  touchEndHandler(e) {
    if (!this.isSwiping) {
      return;
    }

    this.isSwiping = false;
    this.sliderLine.classList.add('slow-switch');

    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) { // перевіряємо по модулю, щоб не плутати з кліком
      if (diff < 0) {
        this.rightClickHandler();
      } else {
        this.leftClickHandler();
      }
    } else {
      this.moveToSlide(this.currentSlide);
    }
  }
}