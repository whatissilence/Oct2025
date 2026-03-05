function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const inputElement = document.querySelector('#cityName');

const inputHandler = (event) => {
  console.log(`Received ${event}`, event.target.value);
}

const debouncedInput = debounce(inputHandler, 500);

inputElement.addEventListener('input', debouncedInput);

// ======================================================

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

const mouseHandler = (event) => {
  console.log(`ClientX:`, event.clientX, '    ClientY:', event.clientY);
}

const mouseThrottled = throttle(mouseHandler, 500);

window.addEventListener('mousemove', mouseThrottled);



