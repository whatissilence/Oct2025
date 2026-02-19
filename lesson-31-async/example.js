let a = ['aa', 'bb', 'cc', 'dd'];

function addExclam(value) {
  return value + '!!!';
}

function showMeSomething() {
  console.log(addExclam('AAAA'));
}

setTimeout(function inTime() {
  console.log('InTime');
}, 1000);

showMeSomething();

console.log(
  a.map(value => addExclam(value)).join('-')
);