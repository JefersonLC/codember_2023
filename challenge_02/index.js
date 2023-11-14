const response = await fetch('https://codember.dev/data/message_02.txt')
const message = await response.text()

const action = {
  '#': (v) => v + 1,
  '@': (v) => v - 1,
  '*': (v) => v ** 2,
}

function miniCompiller(message) {
  let messageToSend = ''
  let currentValue = 0

  for (const char of message) {
    if (char === '&') {
      messageToSend += currentValue
    } else {
      currentValue = action[char](currentValue)
    }
  }

  return messageToSend
}

console.log(miniCompiller(message))
