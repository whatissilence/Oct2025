function getHoursMinutesSeconds(now) {
  const date = new Date(now);
  const frm = value => String(value).padStart(2, '0');

  return `${frm(date.getHours())}:${frm(date.getMinutes())}:${frm(date.getSeconds())}`;
}


export function syncPause(ms) {
  let start = Date.now();
  console.log('syncPause.started', getHoursMinutesSeconds(start));

  let now = start;
  while (now - start < ms) {
    now = Date.now();
  }
  console.log('syncPause.finished', getHoursMinutesSeconds(now));
}

export function callbackPause(ms, callback) {
  console.log('callbackPause.started', getHoursMinutesSeconds(Date.now()));
  setTimeout(() => {
    console.log('callbackPause.finished', getHoursMinutesSeconds(Date.now()));
    callback();
  }, ms);
}

export function promisePause(ms, result) {
  console.log('promisePause.started', getHoursMinutesSeconds(Date.now()));
  return new Promise(resolve => setTimeout(() => {
    console.log('promisePause.finished', getHoursMinutesSeconds(Date.now()));
    resolve(result);
  }, ms));
}