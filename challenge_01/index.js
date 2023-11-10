const response = await fetch('https://codember.dev/data/message_01.txt')
const message = await response.text()

function searchPattern(message) {
  let wordList = {}
  let messageToSend = ''

  const words = message.trim().toLowerCase().split(' ')

  for (const word of words) {
    if (wordList[word] === undefined) {
      wordList[word] = 0
    }

    wordList[word] += 1
  }

  for (const word in wordList) {
    messageToSend += `${word + wordList[word]}`
  }

  return messageToSend
}

searchPattern(message)
