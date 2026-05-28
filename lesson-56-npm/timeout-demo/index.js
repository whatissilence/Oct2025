const showMessage = (digit) => {
  console.log('::::::::::::::::::::::::::::::::::::::')
  console.log(`Цей код виконується кожні ${digit} секунд`, (new Date()).toISOString());
}

let interval = 1;
const repeatedTimeout = () => {
  showMessage(interval)

  if (interval < 900) {
    interval = interval * 2;
  }

  setTimeout(repeatedTimeout, interval * 1000);
}

repeatedTimeout();