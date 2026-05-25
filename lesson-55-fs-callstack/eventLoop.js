setTimeout(() => {
  console.log('Hello from setTimeout')
}, 0)

setImmediate(() => {
  console.log('Hello from setImmediate')
})

process.nextTick(() => {
  console.log('Hello from process.nextTick')
})


console.log('End of file')
