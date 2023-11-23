const response = await fetch(
  'https://codember.dev/data/encryption_policies.txt'
)
const message = await response.text()

function createRegex(min, max, letter) {
  return new RegExp(
    `^(?:[^${letter}]*${letter}){${min},${max}}[^${letter}]*$`,
    'g'
  )
}

function isValid(regex, pass) {
  return regex.test(pass)
}

function spyEncryption(invalidPass) {
  const invalidPasswords = []
  const passwords = message.split('\n')

  for (const password of passwords) {
    const [policy, input] = password.split(': ')
    const [min, max, letter] = policy.split(/-|\s/)

    const regex = createRegex(min, max, letter)

    if (!isValid(regex, input)) {
      invalidPasswords.push(input)
    }
  }

  return invalidPasswords[invalidPass - 1]
}

spyEncryption(42)
