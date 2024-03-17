function generatePassword(options = {}) {
  const {
    length = 10,
    numbers = true,
    symbols = true,
    lowercase = true,
    uppercase = true,
    excludeSimilarCharacters = false,
    exclude = '',
    strict = false,
    customCharacters = '',
    prefix = '',
    suffix = '',
    repeatCharacters = false,
  } = options

  let characters = ''
  if (numbers) characters += '0123456789'
  if (symbols) characters += '!@#$%^&*()-_=+'
  if (lowercase) characters += 'abcdefghijklmnopqrstuvwxyz'
  if (uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (customCharacters) characters += customCharacters

  if (excludeSimilarCharacters) {
    characters = characters.replace(/[ilLI|`oO0]/g, '')
  }

  if (exclude) {
    characters = characters.replace(new RegExp(`[${exclude}]`, 'g'), '')
  }

  let password = ''
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  if (strict) {
    // Shuffle the password characters
    password = password
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('')
  }

  if (prefix) password = prefix + password
  if (suffix) password += suffix

  if (repeatCharacters) {
    // Repeat characters to match specified length
    while (password.length < length) {
      password += password.charAt(Math.floor(Math.random() * password.length))
    }
  }

  return password
}

module.exports = {
  generate: generatePassword,
}
